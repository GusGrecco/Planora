import { Ionicons } from "@expo/vector-icons";

import { SEMANTIC_COLOR_MAP, type SemanticColor } from "../../theme/semantic-colors";
import { sizing } from "../../theme/tokens";

type IconSize = keyof typeof sizing.icon;

type IconProps = {
    name: keyof typeof Ionicons.glyphMap;
    size?: IconSize;
    color?: SemanticColor;
};

/**
 * Single entry point for icons across the app. Ionicons is the only icon
 * library used in Planora — no other @expo/vector-icons set (or other
 * icon library) should be imported directly by feature code, so icon
 * weight/style stays visually consistent across the app.
 *
 * Placement conventions:
 * - Icons paired with text (buttons, list items, form fields) sit to the
 *   left of the label, vertically centered, with `spacing.xs` (4px) gap
 *   — use `Stack direction="row" gap="xs"` to compose this.
 * - Standalone icon buttons use `sizing.control.sm` (32px) as the tap
 *   target, with the icon itself centered inside at `size="md"`.
 * - Tab bar icons are handled by React Navigation's own layout — no
 *   manual placement needed there.
 */
export function Icon({ name, size = "md", color = "default" }: IconProps) {
    return (
        <Ionicons name={name} size={sizing.icon[size]} color={SEMANTIC_COLOR_MAP[color]} />
    );
}
