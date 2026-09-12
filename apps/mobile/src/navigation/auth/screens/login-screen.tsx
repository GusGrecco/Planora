import { Button, StyleSheet, Text, View } from "react-native";

import type { AuthStackScreenProps } from "../types";

export function LoginScreen({ navigation }: AuthStackScreenProps<"Login">) {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
                title="Forgot password?"
                onPress={() => navigation.navigate("ForgotPassword")}
            />
            <Button
                title="Create account"
                onPress={() => navigation.navigate("Register")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
});
