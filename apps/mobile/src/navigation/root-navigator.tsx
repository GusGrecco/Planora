import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthNavigator } from "./auth/auth-navigator";
import { MainNavigator } from "./main/main-navigator";
import { OnboardingNavigator } from "./onboarding/onboarding-navigator";
import type { RootStackParamList } from "./types";
import { ExampleModalScreen } from "./modals/screens/example-modal-screen";

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Root navigator. Onboarding, Auth, and Main are registered as the app's
 * mutually exclusive areas (navigation guards, implemented in the next
 * sub-issue of #8, decide which is reachable). Modal routes are grouped
 * separately with `presentation: "modal"`, layered on top and reachable
 * regardless of which area is active.
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

            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="ExampleModal" component={ExampleModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
