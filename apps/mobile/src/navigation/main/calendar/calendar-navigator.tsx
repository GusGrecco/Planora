import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CalendarScreen } from "./screens/calendar-screen";
import type { CalendarStackParamList } from "./types";

const Stack = createNativeStackNavigator<CalendarStackParamList>();

export function CalendarNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CalendarHome"
                component={CalendarScreen}
                options={{ title: "Calendar" }}
            />
        </Stack.Navigator>
    );
}
