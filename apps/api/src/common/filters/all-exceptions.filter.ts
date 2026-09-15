import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
    Logger,
} from "@nestjs/common";
import type { Request, Response } from "express";

import type { ApiErrorResponse } from "@planora/types";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionsFilter.name);

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const requestId = request.requestId;

        const { status, body } = this.normalize(exception, requestId);

        if (status >= HttpStatus.INTERNAL_SERVER_ERROR) {
            this.logger.error(
                `[${requestId}] Unhandled exception: ${this.describe(exception)}`,
                exception instanceof Error ? exception.stack : undefined,
            );
        }

        response.status(status).json(body);
    }

    private normalize(
        exception: unknown,
        requestId: string,
    ): { status: number; body: ApiErrorResponse } {
        if (exception instanceof HttpException) {
            return this.normalizeHttpException(exception, requestId);
        }

        return {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            body: {
                message: "Internal server error",
                code: "INTERNAL_ERROR",
                requestId,
            },
        };
    }

    private normalizeHttpException(
        exception: HttpException,
        requestId: string,
    ): { status: number; body: ApiErrorResponse } {
        const status = exception.getStatus();
        const payload = exception.getResponse();

        if (this.isApiErrorResponse(payload)) {
            // Already includes requestId (e.g. from ZodValidationPipe) —
            // pass through as-is.
            return { status, body: payload };
        }

        const message =
            typeof payload === "string"
                ? payload
                : ((payload as { message?: string | string[] })?.message ?? exception.message);

        return {
            status,
            body: {
                message: Array.isArray(message) ? message.join(", ") : message,
                code: this.codeFromStatus(status),
                requestId,
            },
        };
    }

    private isApiErrorResponse(payload: unknown): payload is ApiErrorResponse {
        return (
            typeof payload === "object" &&
            payload !== null &&
            "message" in payload &&
            "code" in payload &&
            "requestId" in payload
        );
    }

    private codeFromStatus(status: number): string {
        return HttpStatus[status] ?? "HTTP_ERROR";
    }

    private describe(exception: unknown): string {
        return exception instanceof Error ? exception.message : String(exception);
    }
}
