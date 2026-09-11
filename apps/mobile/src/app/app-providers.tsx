import type { PropsWithChildren } from "react";

/**
 * Root composition point for global providers (state, theming, query client,
 * safe-area, etc.). Intentionally empty for now — providers are added here
 * incrementally as their respective features are implemented.
 */
export function AppProviders({ children }: PropsWithChildren) {
  return children;
}
