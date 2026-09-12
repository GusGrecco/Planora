import { Button, StyleSheet, Text, View } from "react-native";

import type { ModalScreenProps } from "../types";

/**
 * Temporary screen used only to validate modal presentation/dismissal.
 * Will be removed once a real modal screen (e.g. Create Task) exists.
 */
export function ExampleModalScreen({ navigation }: ModalScreenProps<"ExampleModal">) {
    return (
        <View style={styles.container}>
            <Text>Example Modal</Text>
            <Button title="Dismiss" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
});
