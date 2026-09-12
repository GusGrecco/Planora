import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DashboardScreen } from "./screens/dashboard-screen";
import type { DashboardStackParamList } from "./types";

const Stack = createNativeStackNavigator<DashboardStackParamList>();

export function DashboardNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DashboardHome"
                component={DashboardScreen}
                options={{ title: "Dashboard" }}
            />
        </Stack.Navigator>
    );
}
