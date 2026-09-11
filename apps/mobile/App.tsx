import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { AppLoadingGate } from "./src/app/app-loading-gate";
import { ErrorBoundary } from "./src/app/error-boundary";
import { AppProviders } from "./src/app/providers";

export default function App() {
  return (
    <ErrorBoundary>
      <AppProviders>
        <AppLoadingGate>
          <View style={styles.container}>
            <Text>Planora</Text>
            <StatusBar style="auto" />
          </View>
        </AppLoadingGate>
      </AppProviders>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});