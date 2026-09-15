import { z } from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().int().positive().default(3000),
    DATABASE_URL: z
        .string()
        .min(1, "DATABASE_URL is required")
        .regex(
            /^postgresql:\/\/.+/,
            "DATABASE_URL must be a valid PostgreSQL connection string (postgresql://...)",
        ),
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(config: Record<string, unknown>): Env {
    const parsed = envSchema.safeParse(config);

    if (!parsed.success) {
        throw new Error(
            `Invalid environment configuration:\n${parsed.error.toString()}`,
        );
    }

    return parsed.data;
}
