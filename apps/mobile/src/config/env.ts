import { z } from "zod";

const envSchema = z.object({
  EXPO_PUBLIC_API_URL: z.url(),
});

const parsed = envSchema.safeParse({
  EXPO_PUBLIC_API_URL: process.env.EXPO_PUBLIC_API_URL,
});

if (!parsed.success) {
  throw new Error(
    `Invalid environment configuration:\n${parsed.error.toString()}`,
  );
}

export const env = parsed.data;