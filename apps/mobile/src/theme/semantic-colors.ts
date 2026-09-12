import { colors } from "./tokens";

export type SemanticColor = "default" | "muted" | "primary" | "inverse";

/**
 * Shared semantic color mapping used by any component that exposes a
 * `color` prop in these terms (Text, Icon, and future components).
 * Keeps text and icon colors consistent without duplicating this map
 * per component.
 */
export const SEMANTIC_COLOR_MAP: Record<SemanticColor, string> = {
    default: colors.text,
    muted: colors.neutral[400],
    primary: colors.primary,
    inverse: colors.background,
};
