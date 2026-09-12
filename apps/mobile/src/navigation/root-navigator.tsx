import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthNavigator } from "./auth/auth-navigator";
import { MainNavigator } from "./main/main-navigator";
import { OnboardingNavigator } from "./onboarding/onboarding-navigator";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Root navigator. All three top-level navigators (Onboarding, Auth, Main)
 * are registered here. Navigation guards — which will decide which one is
 * actually reachable based on first-access/auth state — are implemented
 * in the following sub-issue of #8.
 */
export function RootNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
            <Stack.Screen name="Auth" component={AuthNavigator} />
            <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
    );
}
