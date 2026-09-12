import { StatusBar } from "expo-status-bar";

import { AppLoadingGate } from "./src/app/app-loading-gate";
import { ErrorBoundary } from "./src/app/error-boundary";
import { GlobalErrorListener } from "./src/app/error-handling/global-error-listener";
import { AppProviders } from "./src/app/providers";
import { RootNavigator } from "./src/navigation/root-navigator";

export default function App() {
  return (
    <ErrorBoundary>
      <GlobalErrorListener>
        <AppProviders>
          <AppLoadingGate>
            <RootNavigator />
          </AppLoadingGate>
        </AppProviders>
      </GlobalErrorListener>
      <StatusBar style="auto" />
    </ErrorBoundary>
  );
}
