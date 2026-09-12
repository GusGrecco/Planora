import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PlaceholderDetailScreen } from "./screens/placeholder-details-screen";
import { PlaceholderScreen } from "./screens/placeholder-screen";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Temporary root navigator used to validate the navigation infrastructure
 * (initialization, typed routes, screen registration, navigation between
 * routes). It will be replaced by the real navigator hierarchy — Auth /
 * Onboarding / Main (with bottom tabs) — in the following sub-issues.
 */
export function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Placeholder" component={PlaceholderScreen} />
            <Stack.Screen
                name="PlaceholderDetail"
                component={PlaceholderDetailScreen}
            />
        </Stack.Navigator>
    );
}
