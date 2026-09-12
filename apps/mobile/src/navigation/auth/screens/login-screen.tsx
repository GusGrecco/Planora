import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useSessionStore } from "../../../state/session-store";
import type { RootStackParamList } from "../../types";
import type { AuthStackScreenProps } from "../types";

export function LoginScreen({ navigation }: AuthStackScreenProps<"Login">) {
    const rootNavigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const signIn = useSessionStore((state) => state.signIn);

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
            {/* Temporary: bypasses real authentication to validate that Main
          becomes reachable once isAuthenticated flips. Will be removed
          once auth business logic exists (Phase 2). */}
            <Button title="(dev) Enter app" onPress={signIn} />
            <Button
                title="(dev) Open example modal"
                onPress={() => rootNavigation.navigate("ExampleModal")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
});
