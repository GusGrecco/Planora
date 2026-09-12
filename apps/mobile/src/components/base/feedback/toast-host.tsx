import { useSyncExternalStore } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { toastStore } from "./toast-store";
import { colors, spacing, borderRadius } from "../../../theme/tokens";
import { Text } from "../text";

const VARIANT_BACKGROUND: Record<string, string> = {
    default: colors.text,
    success: colors.success,
    danger: colors.danger,
};

/**
 * Mounted once near the app root (alongside GlobalErrorListener). Renders
 * any active toasts, stacked at the bottom of the screen, above whatever
 * screen/navigator is currently active.
 */
export function ToastHost() {
    const toasts = useSyncExternalStore(toastStore.subscribe, toastStore.getToasts);

    if (toasts.length === 0) return null;

    return (
        <SafeAreaView
            edges={["bottom"]}
            pointerEvents="box-none"
            style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
        >
            <View style={{ gap: spacing.xs, padding: spacing.md }}>
                {toasts.map((item) => (
                    <Pressable
                        key={item.id}
                        onPress={() => toastStore.dismiss(item.id)}
                        style={{
                            backgroundColor: VARIANT_BACKGROUND[item.variant],
                            borderRadius: borderRadius.md,
                            padding: spacing.sm,
                        }}
                    >
                        <Text variant="body" color="inverse">
                            {item.message}
                        </Text>
                    </Pressable>
                ))}
            </View>
        </SafeAreaView>
    );
}