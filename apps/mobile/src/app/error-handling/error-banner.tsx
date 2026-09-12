import { Pressable, StyleSheet, Text, View } from "react-native";

type ErrorBannerProps = {
    message: string;
    onDismiss: () => void;
};

export function ErrorBanner({ message, onDismiss }: ErrorBannerProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text} numberOfLines={2}>
                {message}
            </Text>
            <Pressable onPress={onDismiss} hitSlop={8}>
                <Text style={styles.dismiss}>✕</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#111827",
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 12,
    },
    text: {
        color: "#fff",
        flex: 1,
    },
    dismiss: {
        color: "#fff",
        fontWeight: "700",
    },
});
