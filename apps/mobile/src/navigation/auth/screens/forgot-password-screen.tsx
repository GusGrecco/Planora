import { Button, StyleSheet, Text, View } from "react-native";

import type { AuthStackScreenProps } from "../types";

export function ForgotPasswordScreen({
    navigation,
}: AuthStackScreenProps<"ForgotPassword">) {
    return (
        <View style={styles.container}>
            <Text>Forgot Password</Text>
            <Button title="Back to login" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
});
