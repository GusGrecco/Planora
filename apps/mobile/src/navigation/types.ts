import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { NavigatorScreenParams } from "@react-navigation/native";

import type { AuthStackParamList } from "./auth/types";
import type { MainTabParamList } from "./main/types";
import type { ModalStackParamList } from "./modals/types";
import type { OnboardingStackParamList } from "./onboarding/types";

/**
 * Root param list. Onboarding, Auth, and Main are mutually exclusive
 * "areas" of the app (controlled by navigation guards). Modal routes are
 * layered on top of whichever area is active, reachable from anywhere.
 */
export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
    Main: NavigatorScreenParams<MainTabParamList>;
} & ModalStackParamList;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
