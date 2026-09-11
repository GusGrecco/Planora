import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { AppProviders } from "./src/app/app-providers";

export default function App() {
  return (
    <AppProviders>
      <View style={styles.container}>
        <Text>Planora</Text>
        <StatusBar style="auto" />
      </View>
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
