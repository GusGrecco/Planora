import { Pressable, StyleSheet, Text, View } from "react-native";

type ErrorFallbackProps = {
  error: Error;
  onReset: () => void;
};

export function ErrorFallback({ error, onReset }: ErrorFallbackProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.message}>{error.message}</Text>
      <Pressable onPress={onReset} style={styles.retryButton}>
        <Text style={styles.retryText}>Try again</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  message: {
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
