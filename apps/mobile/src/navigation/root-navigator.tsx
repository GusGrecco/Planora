import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthNavigator } from "./auth/auth-navigator";
import { OnboardingNavigator } from "./onboarding/onboarding-navigator";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Root navigator. Currently mounts Onboarding as the initial route, with
 * Auth also registered and reachable. This is temporary — Main (tabs)
 * navigator and navigation guards (which will decide which of
 * Onboarding / Auth / Main to render based on first-access and auth
 * state) are implemented in the following sub-issues of #8.
 */
export function RootNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
            <Stack.Screen name="Auth" component={AuthNavigator} />
        </Stack.Navigator>
    );
}