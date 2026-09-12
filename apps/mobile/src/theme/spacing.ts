import { spacing } from "./tokens";

export type SpacingKey = keyof typeof spacing;

/**
 * Resolves a spacing token to its numeric value. Prefer NativeWind
 * classes (`p-md`, `gap-lg`) or the `Stack` component wherever possible —
 * use this only where a style prop requires a raw number (e.g.
 * `contentContainerStyle`, `hitSlop`).
 */
export function getSpacing(key: SpacingKey): number {
    return spacing[key];
}
