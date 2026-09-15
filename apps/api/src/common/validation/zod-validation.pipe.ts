import { BadRequestException, Injectable, type ArgumentMetadata, type PipeTransform } from "@nestjs/common";
import type { ZodSchema } from "zod";

import type { ApiErrorResponse } from "@planora/types";

/**
 * Global validation pipe. Applies to every route parameter (body,
 * query, param) whose declared type is a DTO created via createZodDto.
 * Parameters without an attached schema (e.g. primitive types, plain
 * objects) pass through unchanged.
 *
 * Validated data is also transformed: Zod's default object behavior
 * strips unknown keys, and z.coerce (used in query/param DTOs) converts
 * string inputs (e.g. query params) into the expected type.
 */
@Injectable()
export class ZodValidationPipe implements PipeTransform {
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
