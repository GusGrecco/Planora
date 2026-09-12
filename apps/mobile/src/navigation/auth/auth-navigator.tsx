import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ForgotPasswordScreen } from "./screens/forgot-password-screen";
import { LoginScreen } from "./screens/login-screen";
import { RegisterScreen } from "./screens/register-screen";
import type { AuthStackParamList } from "./types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

/**
 * Navigation stack for authentication-related screens. Isolated from the
 * main application's protected routes — this stack is only ever mounted
 * when the user is not authenticated (wired by the root navigator / guards
 * introduced later in issue #8).
 */
export function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
    );
}
