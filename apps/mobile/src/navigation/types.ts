import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { NavigatorScreenParams } from "@react-navigation/native";

import type { AuthStackParamList } from "./auth/types";

/**
 * Temporary root param list — currently only hosts the Auth navigator.
 * Onboarding and Main (tabs) navigators will be added as sibling routes
 * by their own sub-issues, followed by navigation guards to control which
 * one is mounted.
 */
export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
