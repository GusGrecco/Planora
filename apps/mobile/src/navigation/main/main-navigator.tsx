import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { colors, sizing } from "../../theme/tokens";
import { CalendarNavigator } from "./calendar/calendar-navigator";
import { DashboardNavigator } from "./dashboard/dashboard-navigator";
import { SettingsNavigator } from "./settings/settings-navigator";
import { TemplatesNavigator } from "./templates/template-navigator";
import type { MainTabParamList } from "./types";

const Tab = createBottomTabNavigator<MainTabParamList>();

const TAB_ICONS: Record<keyof MainTabParamList, keyof typeof Ionicons.glyphMap> = {
    Dashboard: "home",
    Calendar: "calendar",
    Templates: "duplicate",
    Settings: "settings",
};

/**
 * Protected navigation structure for authenticated users. Each tab hosts
 * its own stack navigator (DashboardNavigator, CalendarNavigator, etc.),
 * so secondary/contextual screens (e.g. Task Details, Create Task) can be
 * registered inside the relevant stack later without any change here.
 *
 * Mounting of this navigator (vs. Auth/Onboarding) is controlled by
 * navigation guards, implemented in a later sub-issue of #8.
 */
export function MainNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.neutral[400],
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                        name={
                            focused
                                ? TAB_ICONS[route.name]
                                : (`${TAB_ICONS[route.name]}-outline` as keyof typeof Ionicons.glyphMap)
                        }
                        size={sizing.icon.md}
                        color={color}
                    />
                ),
            })}
        >
            <Tab.Screen name="Dashboard" component={DashboardNavigator} />
            <Tab.Screen name="Calendar" component={CalendarNavigator} />
            <Tab.Screen name="Templates" component={TemplatesNavigator} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
    );
}