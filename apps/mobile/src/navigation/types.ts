import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { NavigatorScreenParams } from "@react-navigation/native";

import type { AuthStackParamList } from "./auth/types";
import type { MainTabParamList } from "./main/types";
import type { OnboardingStackParamList } from "./onboarding/types";

/**
 * Root param list hosting all three top-level navigators. Navigation
 * guards (a later sub-issue of #8) will determine which of Onboarding /
 * Auth / Main is actually reachable at a given time based on first-access
 * and authentication state.
 */
export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
    Main: NavigatorScreenParams<MainTabParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
