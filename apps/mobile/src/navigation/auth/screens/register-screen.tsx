import { Button, StyleSheet, Text, View } from "react-native";

import type { AuthStackScreenProps } from "../types";

export function RegisterScreen({ navigation }: AuthStackScreenProps<"Register">) {
    return (
        <View style={styles.container}>
            <Text>Register</Text>
            <Button title="Back to login" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
});
