import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CalendarNavigator } from "./calendar/calendar-navigator";
import { DashboardNavigator } from "./dashboard/dashboard-navigator";
import { SettingsNavigator } from "./settings/settings-navigator";
import { TemplatesNavigator } from "./templates/template-navigator";
import type { MainTabParamList } from "./types";

const Tab = createBottomTabNavigator<MainTabParamList>();

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
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={DashboardNavigator} />
            <Tab.Screen name="Calendar" component={CalendarNavigator} />
            <Tab.Screen name="Templates" component={TemplatesNavigator} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
    );
}
