import { Text as RNText, type TextProps as RNTextProps } from "react-native";

import { colors } from "../../theme/tokens";
import { typography, type TypographyVariant } from "../../theme/typography";

type TextColor = "default" | "muted" | "primary" | "inverse";

const COLOR_MAP: Record<TextColor, string> = {
    default: colors.text,
    muted: colors.neutral[500],
    primary: colors.primary,
    inverse: colors.background,
};

type TextComponentProps = RNTextProps & {
    variant?: TypographyVariant;
    color?: TextColor;
};

/**
 * Base text component. Applies a typography variant (hierarchy) and a
 * semantic color, so feature screens never compose raw fontSize/
 * fontWeight/color values directly.
 */
export function Text({
    variant = "body",
    color = "default",
    style,
    ...props
}: TextComponentProps) {
    return (
        <RNText
            style={[typography[variant], { color: COLOR_MAP[color] }, style]}
            {...props}
        />
    );
}
