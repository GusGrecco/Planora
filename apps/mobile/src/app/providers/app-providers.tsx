import type { PropsWithChildren } from "react";

import { NavigationProvider } from "./navigation-provider";
import { QueryProvider } from "./query-provider";
import { SafeAreaProvider } from "./safe-area-provider";

/**
 * Centralized provider hierarchy for the application.
 *
 * Order matters:
 * 1. SafeAreaProvider  — outermost; insets must be available to anything
 *    that renders below, including navigation and future screens.
 * 2. QueryProvider      — server-state cache, available app-wide to any
 *    screen or feature that needs it.
 * 3. NavigationProvider — navigation container only, no routes defined here.
 *
 * Zustand stores are plain hooks and require no React context/provider —
 * they are not part of this hierarchy.
 *
 * New global providers should be added here, keeping the ordering rationale
 * documented above up to date.
 */
export function AppProviders({ children }: PropsWithChildren) {
   console.log(">>> APP PROVIDERS RENDERING");
  return (
    <SafeAreaProvider>
      <QueryProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </QueryProvider>
    </SafeAreaProvider>
  );
}
