import type { NativeStackScreenProps } from "@react-navigation/native-stack";

/**
 * Temporary root param list, used only to validate the navigation
 * infrastructure. Will be replaced by the real Auth / Onboarding / Main
 * navigator hierarchy in the following sub-issues.
 */
export type RootStackParamList = {
    Placeholder: undefined;
    PlaceholderDetail: { message: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

// Augments React Navigation's own types so hooks like `useNavigation()` are
// typed correctly anywhere in the app, without passing generics manually.
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
