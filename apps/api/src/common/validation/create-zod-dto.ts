import type { ZodSchema, z } from "zod";

/**
 * Creates a DTO class from a Zod schema. The schema is attached as a
 * static property (`schema`) so the global ZodValidationPipe can find
 * and apply it via reflection, without any per-route pipe wiring.
 *
 * Usage:
 *   export class CreateTaskDto extends createZodDto(createTaskSchema) {}
 *   // CreateTaskDto now has the inferred TS shape of createTaskSchema,
 *   // usable as a normal Nest DTO type in controller method signatures.
 */
export function createZodDto<T extends ZodSchema>(schema: T) {
    class ZodDto {
        static schema = schema;
    }

    return ZodDto as { new(): z.infer<T>; schema: T };
}
