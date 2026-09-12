import type { ViewProps } from "react-native";

import { spacing } from "../../theme/tokens";
import { Surface } from "./surface";

type CardProps = ViewProps & {
    padded?: boolean;
};

/**
 * Base card — a Surface with sensible default padding. Feature content
 * (task summaries, template previews, etc.) is passed as children.
 */
export function Card({ padded = true, style, children, ...props }: CardProps) {
    return (
        <Surface
            radius="md"
            elevation="low"
            style={[padded ? { padding: spacing.md } : undefined, style]}
            {...props}
        >
            {children}
        </Surface>
    );
}
