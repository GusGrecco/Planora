type ErrorUtilsShape = {
    getGlobalHandler: () => (error: unknown, isFatal?: boolean) => void;
    setGlobalHandler: (handler: (error: unknown, isFatal?: boolean) => void) => void;
};

export function getErrorUtils(): ErrorUtilsShape | undefined {
    return (globalThis as unknown as { ErrorUtils?: ErrorUtilsShape }).ErrorUtils;
}
