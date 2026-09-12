import { StyleSheet } from "react-native";

import { fontSize, fontWeight, lineHeight } from "./tokens";

/**
 * Text hierarchy for the app. Each variant resolves fontSize + computed
 * lineHeight + fontWeight into a single ready-to-use style. Prefer these
 * over composing raw tokens ad hoc in feature screens.
 */
export const typography = StyleSheet.create({
    h1: {
        fontSize: fontSize["3xl"],
        lineHeight: fontSize["3xl"] * lineHeight.tight,
        fontWeight: fontWeight.bold,
    },
    h2: {
        fontSize: fontSize["2xl"],
        lineHeight: fontSize["2xl"] * lineHeight.tight,
        fontWeight: fontWeight.bold,
    },
    h3: {
        fontSize: fontSize.xl,
        lineHeight: fontSize.xl * lineHeight.normal,
        fontWeight: fontWeight.semibold,
    },
    subtitle: {
        fontSize: fontSize.lg,
        lineHeight: fontSize.lg * lineHeight.normal,
        fontWeight: fontWeight.medium,
    },
    body: {
        fontSize: fontSize.base,
        lineHeight: fontSize.base * lineHeight.normal,
        fontWeight: fontWeight.regular,
    },
    bodyStrong: {
        fontSize: fontSize.base,
        lineHeight: fontSize.base * lineHeight.normal,
        fontWeight: fontWeight.semibold,
    },
    caption: {
        fontSize: fontSize.sm,
        lineHeight: fontSize.sm * lineHeight.normal,
        fontWeight: fontWeight.regular,
    },
    overline: {
        fontSize: fontSize.xs,
        lineHeight: fontSize.xs * lineHeight.relaxed,
        fontWeight: fontWeight.medium,
    },
});

export type TypographyVariant = keyof typeof typography;
