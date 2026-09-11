import { useCallback, useEffect, useState } from "react";

import { withTimeout } from "../../lib/with-timeout";
import { runAppInitialization } from "./run-app-initialization";
import type { AppInitStatus } from "./types";

const INIT_TIMEOUT_MS = 15_000;

export function useAppInitialization() {
    const [status, setStatus] = useState<AppInitStatus>("loading");
    const [error, setError] = useState<Error | null>(null);

    const initialize = useCallback(async () => {
        setStatus("loading");
        setError(null);

        try {
            await withTimeout(
                runAppInitialization(),
                INIT_TIMEOUT_MS,
                "App initialization timed out",
            );
            setStatus("ready");
        } catch (err) {
            setError(err instanceof Error ? err : new Error("Unknown initialization error"));
            setStatus("error");
        }
    }, []);

    useEffect(() => {
        initialize();
    }, [initialize]);

    return { status, error, retry: initialize };
}
