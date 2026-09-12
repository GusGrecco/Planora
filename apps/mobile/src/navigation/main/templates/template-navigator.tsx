import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TemplatesScreen } from "./screens/templates-screen";
import type { TemplatesStackParamList } from "./types";

const Stack = createNativeStackNavigator<TemplatesStackParamList>();

export function TemplatesNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TemplatesHome"
                component={TemplatesScreen}
                options={{ title: "Templates" }}
            />
        </Stack.Navigator>
    );
}
