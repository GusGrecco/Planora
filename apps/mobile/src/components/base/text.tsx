import { Text as RNText, type TextProps as RNTextProps } from "react-native";

import { SEMANTIC_COLOR_MAP, type SemanticColor } from "../../theme/semantic-colors";
import { typography, type TypographyVariant } from "../../theme/typography";

type TextComponentProps = RNTextProps & {
    variant?: TypographyVariant;
    color?: SemanticColor;
};

export function Text({
    variant = "body",
    color = "default",
    style,
    ...props
}: TextComponentProps) {
    return (
        <RNText
            style={[typography[variant], { color: SEMANTIC_COLOR_MAP[color] }, style]}
            {...props}
        />
    );
}
