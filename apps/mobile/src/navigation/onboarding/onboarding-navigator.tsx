import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FeaturesScreen } from "./screens/features-screen";
import { GetStartedScreen } from "./screens/get-started-screen";
import { IntroductionScreen } from "./screens/introduction-screen";
import type { OnboardingStackParamList } from "./types";

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

/**
 * Navigation flow for first-time users. Mounted by the root navigator
 * before Auth/Main once navigation guards (a later sub-issue of #8)
 * determine this is the user's first access.
 */
export function OnboardingNavigator() {
    return (
        <Stack.Navigator initialRouteName="Introduction">
            <Stack.Screen name="Introduction" component={IntroductionScreen} />
            <Stack.Screen name="Features" component={FeaturesScreen} />
            <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        </Stack.Navigator>
    );
}
