import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
    Logger,
} from "@nestjs/common";
import type { Response } from "express";

import type { ApiErrorResponse } from "@planora/types";

/**
 * Global exception filter — the single place where every thrown
 * exception (HttpException or not) is normalized into the
 * ApiErrorResponse shape before reaching the client.
 *
 * Unexpected (non-HttpException) errors are logged with full detail
 * server-side, but only a generic message reaches the client — never
 * a stack trace, driver error message, or internal path.
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionsFilter.name);

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        const { status, body } = this.normalize(exception);

        if (status >= HttpStatus.INTERNAL_SERVER_ERROR) {
            this.logger.error(
                `Unhandled exception: ${this.describe(exception)}`,
                exception instanceof Error ? exception.stack : undefined,
            );
        }

        response.status(status).json(body);
    }

    private normalize(exception: unknown): { status: number; body: ApiErrorResponse } {
        if (exception instanceof HttpException) {
            return this.normalizeHttpException(exception);
        }

        // Extension point for known non-HTTP errors (e.g. Prisma constraint
        // violations) once a data layer exists — map specific error types
        // to specific status codes/codes here, following the same
        // { status, body } shape, instead of falling through to the
        // generic 500 below.

        return {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            body: {
                message: "Internal server error",
                code: "INTERNAL_ERROR",
            },
        };
    }

    private normalizeHttpException(
        exception: HttpException,
    ): { status: number; body: ApiErrorResponse } {
        const status = exception.getStatus();
        const payload = exception.getResponse();

        // Our own ZodValidationPipe (#33) already throws with an
        // ApiErrorResponse-shaped payload — pass it through as-is.
        if (this.isApiErrorResponse(payload)) {
            return { status, body: payload };
        }

        // Nest's default HttpException payload shape:
        // { statusCode, message, error } — normalize it.
        const message =
            typeof payload === "string"
                ? payload
                : ((payload as { message?: string | string[] })?.message ?? exception.message);

        return {
            status,
            body: {
                message: Array.isArray(message) ? message.join(", ") : message,
                code: this.codeFromStatus(status),
            },
        };
    }

    private isApiErrorResponse(payload: unknown): payload is ApiErrorResponse {
        return (
            typeof payload === "object" &&
            payload !== null &&
            "message" in payload &&
            "code" in payload
        );
    }

    private codeFromStatus(status: number): string {
        return HttpStatus[status] ?? "HTTP_ERROR";
    }

    private describe(exception: unknown): string {
        return exception instanceof Error ? exception.message : String(exception);
    }
}
