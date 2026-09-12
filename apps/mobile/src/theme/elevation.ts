import type { ViewStyle } from "react-native";

import { elevation } from "./tokens";

export type ElevationLevel = keyof typeof elevation;

/**
 * Resolves an elevation token to a style object. Use this instead of
 * spreading `tokens.elevation[...]` directly, so the intent (elevation
 * level, not raw shadow props) stays explicit at the call site.
 */
export function getElevation(level: ElevationLevel): ViewStyle {
    return elevation[level];
}

/**
 * Elevation usage guidelines:
 *
 * - none   — flat elements with no visual separation from the background
 *            (e.g. list rows separated by a border instead of a shadow).
 * - low    — resting state of cards, list items that need to stand out
 *            slightly from the background (e.g. Dashboard task cards).
 * - medium — floating elements above the base content layer, but still
 *            part of the normal flow (e.g. floating action buttons,
 *            dropdown menus, tooltips).
 * - high   — content presented above the entire screen (e.g. modals,
 *            bottom sheets, dialogs) — reserved for the modal navigation
 *            layer (#14) and similar overlays.
 *
 * Border radius usage guidelines:
 *
 * - sm    — small interactive elements (chips, badges, small buttons).
 * - md    — default for cards, inputs, and most containers.
 * - lg    — large surfaces (sheets, modals, prominent cards).
 * - full  — circular/pill shapes (avatars, icon buttons, pills).
 */
