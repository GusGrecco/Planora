import { Button, StyleSheet, Text, View } from "react-native";

import type { RootStackScreenProps } from "../types";

export function PlaceholderScreen({
    navigation,
}: RootStackScreenProps<"Placeholder">) {
    return (
        <View style={styles.container}>
            <Text>Navigation infrastructure OK</Text>
            <Button
                title="Go to detail"
                onPress={() =>
                    navigation.navigate("PlaceholderDetail", {
                        message: "Hello from Placeholder",
                    })
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
});
