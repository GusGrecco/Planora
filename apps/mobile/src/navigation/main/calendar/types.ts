import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type CalendarStackParamList = {
    CalendarHome: undefined;
};

export type CalendarStackScreenProps<T extends keyof CalendarStackParamList> =
    NativeStackScreenProps<CalendarStackParamList, T>;
