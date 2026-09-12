/**
 * Design tokens — single source of truth for Planora's design system.
 * Consumed by tailwind.config.js (className-based styling via NativeWind)
 * and by app code directly (for style props NativeWind cannot express,
 * e.g. RN shadow/elevation, third-party `color`/`size` props).
 *
 * Dark mode is not defined yet — only the light palette exists so far.
 */

const colors = {
    text: "#090a0b",
    background: "#f5fbff",
    primary: "#44BBA4",
    secondary: "#7cc5fe",
    accent: "#eeccfa",
    // Neutral scale — not part of the palette provided so far, added to
    // support borders, disabled states, and muted text without hardcoding
    // grays ad hoc across components. Revisit if a formal neutral scale is
    // defined later.
    neutral: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
    },
};

const fontSize = {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
};

// Base spacing scale, plus named component-sizing values expressed in the
// same unit so they're usable as Tailwind spacing suffixes too
// (e.g. `className="h-control-md w-control-md"`).
const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 48,
    "icon-sm": 16,
    "icon-md": 24,
    "icon-lg": 32,
    "control-sm": 32,
    "control-md": 44,
    "control-lg": 56,
};

// Same component-sizing values, exposed as plain numbers for places that
// need a number rather than a className (e.g. `<Ionicons size={...} />`).
const sizing = {
    icon: { sm: spacing["icon-sm"], md: spacing["icon-md"], lg: spacing["icon-lg"] },
    control: {
        sm: spacing["control-sm"],
        md: spacing["control-md"],
        lg: spacing["control-lg"],
    },
};

const borderRadius = {
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999,
};

/**
 * Elevation levels. React Native has no unified cross-platform shadow API
 * (iOS: shadowColor/shadowOffset/shadowOpacity/shadowRadius; Android:
 * elevation) and NativeWind utility classes cannot reliably express both
 * at once. These are plain style-prop objects meant to be spread onto a
 * component's `style`, not Tailwind classes.
 */
const elevation = {
    none: {
        shadowColor: "transparent",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },
    low: {
        shadowColor: colors.text,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        elevation: 2,
    },
    medium: {
        shadowColor: colors.text,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
        elevation: 4,
    },
    high: {
        shadowColor: colors.text,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.16,
        shadowRadius: 8,
        elevation: 8,
    },
};

module.exports = { colors, fontSize, spacing, sizing, borderRadius, elevation };
