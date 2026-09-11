export type AppInitStatus = "loading" | "ready" | "error";

export type AppInitStep = () => Promise<void>;
