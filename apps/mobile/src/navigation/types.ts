import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { NavigatorScreenParams } from "@react-navigation/native";

import type { AuthStackParamList } from "./auth/types";
import type { OnboardingStackParamList } from "./onboarding/types";

/**
 * Temporary root param list — currently hosts Auth and Onboarding.
 * Main (tabs) navigator will be added as a sibling route by its own
 * sub-issue, followed by navigation guards to control which one is
 * mounted based on auth/first-access state.
 */
export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
