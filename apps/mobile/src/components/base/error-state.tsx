import { View } from "react-native";

import { spacing } from "../../theme/tokens";
import { Button } from "./button";
import { Icon } from "./icon";
import { Stack } from "./stack";
import { Text } from "./text";

type ErrorStateProps = {
    title?: string;
    description?: string;
    onRetry?: () => void;
};

/**
 * Generic error state for a section/screen whose data failed to load —
 * distinct from ErrorBoundary/ErrorFallback (#15/#16), which handle
 * unrecoverable rendering errors for the whole app. This is for
 * feature-level failures (e.g. a failed task list fetch) where the rest
 * of the screen keeps working.
 */
export function ErrorState({
    title = "Something went wrong",
    description,
    onRetry,
}: ErrorStateProps) {
    return (
        <View style={{ alignItems: "center", justifyContent: "center", padding: spacing.xl }}>
            <Stack gap="sm" style={{ alignItems: "center" }}>
                <Icon name="alert-circle" size="lg" color="danger" />
                <Text variant="subtitle" style={{ textAlign: "center" }}>
                    {title}
                </Text>
                {description ? (
                    <Text variant="body" color="muted" style={{ textAlign: "center" }}>
                        {description}
                    </Text>
                ) : null}
                {onRetry ? <Button label="Try again" onPress={onRetry} size="sm" variant="outline" /> : null}
            </Stack>
        </View>
    );
}
