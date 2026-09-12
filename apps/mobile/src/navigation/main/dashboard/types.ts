import type { NativeStackScreenProps } from "@react-navigation/native-stack";

/**
 * Root of the Dashboard stack. Task Details / Create / Edit and other
 * secondary screens will be added here by their own future issues,
 * without requiring changes to MainNavigator (the tab navigator).
 */
export type DashboardStackParamList = {
    DashboardHome: undefined;
};

export type DashboardStackScreenProps<T extends keyof DashboardStackParamList> =
    NativeStackScreenProps<DashboardStackParamList, T>;
