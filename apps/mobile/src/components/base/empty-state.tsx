import { View } from "react-native";

import { spacing } from "../../theme/tokens";
import { Button } from "./button";
import { Icon } from "./icon";
import { Stack } from "./stack";
import { Text } from "./text";

type EmptyStateProps = {
    iconName: React.ComponentProps<typeof Icon>["name"];
    title: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
};

/**
 * Generic empty state (no tasks, no templates, no results, etc.).
 * Feature domains provide the icon/copy/action; this component only
 * handles layout and reuses the base Icon/Text/Button components.
 */
export function EmptyState({
    iconName,
    title,
    description,
    actionLabel,
    onAction,
}: EmptyStateProps) {
    return (
        <View style={{ alignItems: "center", justifyContent: "center", padding: spacing.xl }}>
            <Stack gap="sm" style={{ alignItems: "center" }}>
                <Icon name={iconName} size="lg" color="muted" />
                <Text variant="subtitle" style={{ textAlign: "center" }}>
                    {title}
                </Text>
                {description ? (
                    <Text variant="body" color="muted" style={{ textAlign: "center" }}>
                        {description}
                    </Text>
                ) : null}
                {actionLabel && onAction ? (
                    <Button label={actionLabel} onPress={onAction} size="sm" />
                ) : null}
            </Stack>
        </View>
    );
}
