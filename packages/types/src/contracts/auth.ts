import type { User } from "../domain/user";

export type RegisterRequest = {
    name: string;
    email: string;
    password: string;
};

export type LoginRequest = {
    email: string;
    password: string;
};

export type AuthTokens = {
    accessToken: string;
    refreshToken: string;
};

export type AuthResponse = {
    user: User;
    tokens: AuthTokens;
};

export type RefreshTokenRequest = {
    refreshToken: string;
};

export type RefreshTokenResponse = AuthTokens;
