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
    danger: "#f94144",
    success: "#00af54",
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

const fontFamily = {
    sans: undefined,
};

const fontWeight = {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
};

const lineHeight = {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
};

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

module.exports = {
    colors,
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
    spacing,
    sizing,
    borderRadius,
    elevation,
};