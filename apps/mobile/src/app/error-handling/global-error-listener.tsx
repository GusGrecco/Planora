import { useSyncExternalStore, type PropsWithChildren } from "react";

import { ErrorFallback } from "../error-fallback";
import { ErrorBanner } from "./error-banner";
import { globalErrorStore } from "./global-error-store";

export function GlobalErrorListener({ children }: PropsWithChildren) {
    const fatalError = useSyncExternalStore(
        globalErrorStore.subscribe,
        globalErrorStore.getFatalError,
    );
    const warnings = useSyncExternalStore(
        globalErrorStore.subscribe,
        globalErrorStore.getWarnings,
    );

    if (fatalError) {
        return (
            <ErrorFallback
                error={fatalError.error}
                onReset={globalErrorStore.resetFatalError}
            />
        );
    }

    return (
        <>
            {warnings.map((warning) => (
                <ErrorBanner
                    key={warning.id}
                    message={warning.error.message}
                    onDismiss={() => globalErrorStore.dismissWarning(warning.id)}
                />
            ))}
            {children}
        </>
    );
}
