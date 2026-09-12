import "./global.css";
import { StatusBar } from "expo-status-bar";

import { AppLoadingGate } from "./src/app/app-loading-gate";
import { ErrorBoundary } from "./src/app/error-boundary";
import { GlobalErrorListener } from "./src/app/error-handling/global-error-listener";
import { RootNavigator } from "./src/navigation/root-navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryProvider } from "./src/app/providers/query-provider";
import { NavigationProvider } from "./src/app/providers/navigation-provider";

console.log(">>> REAL APP MODULE LOADED");

export default function App() {
  console.log(">>> REAL APP RENDERING");
  return (
    <ErrorBoundary>
      <GlobalErrorListener>
        <SafeAreaProvider>
          <QueryProvider>
            <NavigationProvider>
              <AppLoadingGate>
                <RootNavigator />
              </AppLoadingGate>
            </NavigationProvider>
          </QueryProvider>
        </SafeAreaProvider>
      </GlobalErrorListener>
      <StatusBar style="auto" />
    </ErrorBoundary>
  );
}
