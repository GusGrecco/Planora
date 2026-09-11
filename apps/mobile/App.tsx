import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { AppLoadingGate } from "./src/app/app-loading-gate";
import { AppProviders } from "./src/app/providers";

export default function App() {
  return (
    <AppProviders>
      <AppLoadingGate>
        <View style={styles.container}>
          <Text>Planora</Text>
          <StatusBar style="auto" />
        </View>
      </AppLoadingGate>
    </AppProviders>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
