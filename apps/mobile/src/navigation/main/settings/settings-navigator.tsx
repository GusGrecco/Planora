import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsScreen } from "./screens/settings-screen";
import type { SettingsStackParamList } from "./types";

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export function SettingsNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SettingsHome"
                component={SettingsScreen}
                options={{ title: "Settings" }}
            />
        </Stack.Navigator>
    );
}
