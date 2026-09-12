import type { GlobalErrorEntry } from "./types";

type Listener = () => void;

let fatalError: GlobalErrorEntry | null = null;
let warnings: GlobalErrorEntry[] = [];
const listeners = new Set<Listener>();

function emit() {
    listeners.forEach((listener) => listener());
}

export const globalErrorStore = {
    subscribe(listener: Listener) {
        listeners.add(listener);
        return () => listeners.delete(listener);
    },

    getFatalError() {
        return fatalError;
    },

    getWarnings() {
        return warnings;
    },

    pushError(entry: GlobalErrorEntry) {
        if (entry.fatal) {
            fatalError = entry;
        } else {
            warnings = [...warnings, entry];
        }
        emit();
    },

    dismissWarning(id: string) {
        warnings = warnings.filter((entry) => entry.id !== id);
        emit();
    },

    resetFatalError() {
        fatalError = null;
        emit();
    },
};
