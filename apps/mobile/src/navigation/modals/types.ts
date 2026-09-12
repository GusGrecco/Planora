import type { NativeStackScreenProps } from "@react-navigation/native-stack";

/**
 * Modal routes registered at the root level. Any screen listed here is
 * presented as a modal (native-stack `presentation: "modal"`) over
 * whichever navigator (Auth/Onboarding/Main) is currently active,
 * without affecting that navigator's own state.
 *
 * Real modal screens (e.g. Create Task) will be added here by their
 * own future issues. ExampleModal exists only to validate presentation
 * and dismissal behavior for this sub-issue.
 */
export type ModalStackParamList = {
    ExampleModal: undefined;
};

export type ModalScreenProps<T extends keyof ModalStackParamList> =
    NativeStackScreenProps<ModalStackParamList, T>;
