import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useSessionStore } from "../state/session-store";
import { useOnboardingStore } from "../state/onboarding-store";
import { AuthNavigator } from "./auth/auth-navigator";
import { MainNavigator } from "./main/main-navigator";
import { OnboardingNavigator } from "./onboarding/onboarding-navigator";
import type { RootStackParamList } from "./types";
import { ExampleModalScreen } from "./modals/screens/example-modal-screen";

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Root navigator with navigation guards.
 *
 * Onboarding, Auth, and Main are mutually exclusive and rendered
 * conditionally based on app state — not reached via manual `navigate()`
 * calls guarded by checks. This is intentional: conditionally rendering
 * which screens exist in the tree (rather than imperatively redirecting
 * away from screens that shouldn't be reachable) is what prevents
 * redirect loops. When the condition flips, React Navigation resets
 * navigation state for the newly (un)mounted area automatically.
 *
 * Modal routes are unaffected by these guards — they're layered on top
 * of whichever area is active.
 */
export function RootNavigator() {
    const isAuthenticated = useSessionStore((state) => state.isAuthenticated);
    const hasCompletedOnboarding = useOnboardingStore(
        (state) => state.hasCompletedOnboarding,
    );

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!hasCompletedOnboarding ? (
                <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
            ) : !isAuthenticated ? (
                <Stack.Screen name="Auth" component={AuthNavigator} />
            ) : (
                <Stack.Screen name="Main" component={MainNavigator} />
            )}

            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="ExampleModal" component={ExampleModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}