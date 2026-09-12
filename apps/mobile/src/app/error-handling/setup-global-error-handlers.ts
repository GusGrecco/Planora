import { reportError } from "../error-reporting";
import { normalizeError } from "../../lib/normalize-error";
import { getErrorUtils } from "./error-utils-bridge";
import { globalErrorStore } from "./global-error-store";

let isSetup = false;

export function setupGlobalErrorHandlers() {
    if (isSetup) return;
    isSetup = true;

    // Uncaught JS errors (outside React render). `isFatal` reflects whether
    // the RN runtime considers this unrecoverable.
    const errorUtils = getErrorUtils();
    const previousHandler = errorUtils?.getGlobalHandler?.();

    errorUtils?.setGlobalHandler((error: unknown, isFatal?: boolean) => {
        const normalized = normalizeError(error);
        reportError(normalized);
        globalErrorStore.pushError({
            id: `${Date.now()}`,
            error: normalized,
            fatal: Boolean(isFatal),
        });

        // Preserve default/dev-mode behavior (e.g. redbox in development)
        // in addition to our own handling.
        previousHandler?.(normalized, isFatal);
    });

    // Unhandled promise rejections. Availability of this hook depends on the
    // JS engine (Hermes) and RN version; guarded defensively so this never
    // throws on an environment where it isn't present.
    const addEventListener = (
        globalThis as unknown as {
            addEventListener?: (
                type: "unhandledrejection",
                listener: (event: { reason: unknown }) => void,
            ) => void;
        }
    ).addEventListener;

    addEventListener?.("unhandledrejection", (event) => {
        const normalized = normalizeError(event.reason);
        reportError(normalized);
        globalErrorStore.pushError({
            id: `${Date.now()}`,
            error: normalized,
            fatal: false,
        });
    });
}
