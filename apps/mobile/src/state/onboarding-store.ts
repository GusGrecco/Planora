import { create } from "zustand";

type OnboardingState = {
    hasCompletedOnboarding: boolean;
    complete: () => void;
};

/**
 * Minimal onboarding-completion state for navigation guards. Not
 * persisted yet — every app restart currently resets to `false`.
 * Persistence (so onboarding is only shown once, ever) belongs to the
 * Loading/first-access detection work (Application Initialization),
 * which will hydrate this store instead of defaulting it.
 */
export const useOnboardingStore = create<OnboardingState>((set) => ({
    hasCompletedOnboarding: false,
    complete: () => set({ hasCompletedOnboarding: true }),
}));
