import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../../types";
import type { AuthStackScreenProps } from "../types";

export function LoginScreen({ navigation }: AuthStackScreenProps<"Login">) {
    const rootNavigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
            {/* Temporary: bypasses real authentication to validate that Main is
            reachable. Will be removed once auth business logic + guards
          exist. */}
            <Button
                title="(dev) Enter app"
                onPress={() =>
                    rootNavigation.navigate("Main", {
                        screen: "Dashboard",
                        params: { screen: "DashboardHome" },
                    })
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
});
