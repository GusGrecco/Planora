import { create } from "zustand";

type SessionState = {
    isAuthenticated: boolean;
    signIn: () => void;
    signOut: () => void;
};

/**
 * Minimal session state for navigation guards. Contains no real
 * authentication logic (no API calls, no token handling, no
 * persistence) — that belongs to the Authentication feature (Phase 2),
 * which will replace signIn/signOut's implementation without changing
 * this shape.
 */
export const useSessionStore = create<SessionState>((set) => ({
    isAuthenticated: false,
    signIn: () => set({ isAuthenticated: true }),
    signOut: () => set({ isAuthenticated: false }),
}));
