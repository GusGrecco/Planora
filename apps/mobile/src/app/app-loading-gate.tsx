import type { PropsWithChildren } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";

import { useAppInitialization } from "./initialization/use-app-initialization";

export function AppLoadingGate({ children }: PropsWithChildren) {
    const { status, error, retry } = useAppInitialization();

    if (status === "loading") {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (status === "error") {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>
                    {error?.message ?? "Something went wrong while starting the app."}
                </Text>
                <Pressable onPress={retry} style={styles.retryButton}>
                    <Text style={styles.retryText}>Try again</Text>
                </Pressable>
            </View>
        );
    }

    return children;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        gap: 16,
    },
    errorText: {
        textAlign: "center",
    },
    retryButton: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#111827",
    },
    retryText: {
        color: "#fff",
        fontWeight: "600",
    },
});
