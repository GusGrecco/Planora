import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type OnboardingStackParamList = {
    Introduction: undefined;
    Features: undefined;
    GetStarted: undefined;
};

export type OnboardingStackScreenProps<T extends keyof OnboardingStackParamList> =
    NativeStackScreenProps<OnboardingStackParamList, T>;
