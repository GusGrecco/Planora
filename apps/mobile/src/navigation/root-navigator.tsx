import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthNavigator } from "./auth/auth-navigator";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Root navigator. Currently mounts the Auth stack unconditionally — this
 * is temporary. Onboarding and Main (tabs) navigators, plus the guards that
 * decide which one to render, are implemented in the following sub-issues
 * of #8 (Mobile Navigation).
 */
export function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthNavigator} />
        </Stack.Navigator>
    );
}
