import type { NavigatorScreenParams } from "@react-navigation/native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import type { CalendarStackParamList } from "./calendar/types";
import type { DashboardStackParamList } from "./dashboard/types";
import type { SettingsStackParamList } from "./settings/types";
import type { TemplatesStackParamList } from "./templates/types";

/**
 * Bottom tab param list — the four primary destinations. Tasks are
 * intentionally not represented here; task creation/details are
 * accessed contextually from within Dashboard (and later Calendar/
 * Templates), not as a tab.
 */
export type MainTabParamList = {
    Dashboard: NavigatorScreenParams<DashboardStackParamList>;
    Calendar: NavigatorScreenParams<CalendarStackParamList>;
    Templates: NavigatorScreenParams<TemplatesStackParamList>;
    Settings: NavigatorScreenParams<SettingsStackParamList>;
};

export type MainTabScreenProps<T extends keyof MainTabParamList> =
    BottomTabScreenProps<MainTabParamList, T>;
