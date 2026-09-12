import { ActivityIndicator, View } from "react-native";

import { colors, spacing } from "../../theme/tokens";
import { Stack } from "./stack";
import { Text } from "./text";

type LoadingStateProps = {
    message?: string;
    fullscreen?: boolean;
};

/**
 * Generic loading indicator, reusable across feature domains (task
 * lists, calendar, templates, etc.). Not aware of what is loading.
 */
export function LoadingState({ message, fullscreen = false }: LoadingStateProps) {
    return (
        <View
            style={{
                flex: fullscreen ? 1 : undefined,
                alignItems: "center",
                justifyContent: "center",
                padding: spacing.lg,
            }}
        >
            <Stack gap="sm" style={{ alignItems: "center" }}>
                <ActivityIndicator size="large" color={colors.primary} />
                {message ? (
                    <Text variant="caption" color="muted">
                        {message}
                    </Text>
                ) : null}
            </Stack>
        </View>
    );
}
