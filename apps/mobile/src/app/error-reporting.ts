export function reportError(error: Error, info?: { componentStack?: string }) {
  // Placeholder for future error-reporting integration (e.g. Sentry).
  // Kept isolated so the boundary itself never depends on a specific provider.
  console.error("[Planora] Unhandled rendering error:", error, info?.componentStack);
}
