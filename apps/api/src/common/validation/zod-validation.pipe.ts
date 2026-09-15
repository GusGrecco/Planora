import {
    BadRequestException,
    Inject,
    Injectable,
    Scope,
    type ArgumentMetadata,
    type PipeTransform,
} from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import type { Request } from "express";
import type { ZodSchema } from "zod";

import type { ApiErrorResponse } from "@planora/types";

@Injectable({ scope: Scope.REQUEST })
export class ZodValidationPipe implements PipeTransform {
    constructor(@Inject(REQUEST) private readonly request: Request) { }

    transform(value: unknown, metadata: ArgumentMetadata) {
        const schema = this.getSchema(metadata);

        if (!schema) {
            return value;
        }

        const result = schema.safeParse(value);

        if (!result.success) {
            const errorResponse: ApiErrorResponse = {
                message: "Validation failed",
                code: "VALIDATION_ERROR",
                details: { issues: result.error.issues },
                requestId: this.request.requestId,
            };
            throw new BadRequestException(errorResponse);
        }

        return result.data;
    }

    private getSchema(metadata: ArgumentMetadata): ZodSchema | undefined {
        const metatype = metadata.metatype as { schema?: ZodSchema } | undefined;
        return metatype?.schema;
    }
}
