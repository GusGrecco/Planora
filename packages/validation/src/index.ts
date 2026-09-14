import { z } from "zod";

/**
 * @planora/validation — shared, framework-agnostic Zod schemas, consumed
 * by both the mobile app and the API for consistent validation on both
 * sides of the network boundary.
 *
 * Real domain schemas (Task, Template, etc.) are added by the following
 * sub-issues of #24 (Shared Packages). This file currently exports only
 * a minimal example schema to validate that the export mechanism works.
 */

export const exampleSchema = z.object({
    id: z.string(),
});

export type Example = z.infer<typeof exampleSchema>;
