import { View, type ViewProps } from "react-native";

import { spacing } from "../../theme/tokens";

type SpacingKey = keyof typeof spacing;

type StackProps = ViewProps & {
    direction?: "row" | "column";
    gap?: SpacingKey;
};

/**
 * Lays out children with consistent spacing from the design system's
 * spacing scale, avoiding ad hoc `style={{ gap: <number> }}` duplicated
 * across screens.
 */
export function Stack({
    direction = "column",
    gap = "md",
    style,
    ...props
}: StackProps) {
    return (
        <View
            style={[{ flexDirection: direction, gap: spacing[gap] }, style]}
            {...props}
        />
    );
}
