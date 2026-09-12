import "./global.css";
import { StatusBar } from "expo-status-bar";

import { AppLoadingGate } from "./src/app/app-loading-gate";
import { ErrorBoundary } from "./src/app/error-boundary";
import { GlobalErrorListener } from "./src/app/error-handling/global-error-listener";
import { RootNavigator } from "./src/navigation/root-navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { ToastHost } from "./src/components/base/feedback/toast-host";
import { queryClient } from "./src/lib/query-client";

console.log(">>> REAL APP MODULE LOADED");

export default function App() {
  console.log(">>> REAL APP RENDERING");
  return (
    <ErrorBoundary>
      <GlobalErrorListener>
        <SafeAreaProvider>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <AppLoadingGate>
                <RootNavigator />
              </AppLoadingGate>
              <ToastHost />
            </NavigationContainer>
          </QueryClientProvider>
        </SafeAreaProvider>
      </GlobalErrorListener>
      <StatusBar style="auto" />
    </ErrorBoundary>
  );
}
