import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type SettingsStackParamList = {
    SettingsHome: undefined;
};

export type SettingsStackScreenProps<T extends keyof SettingsStackParamList> =
    NativeStackScreenProps<SettingsStackParamList, T>;
