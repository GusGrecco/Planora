import type { AppInitStep } from "./types";

/**
 * Ordered initialization steps run before the app becomes available.
 * Currently empty — auth-state check, local database setup, and
 * first-access detection will be appended here by their own issues.
 */
const initSteps: AppInitStep[] = [];

export async function runAppInitialization(): Promise<void> {
    for (const step of initSteps) {
        await step();
    }
}
