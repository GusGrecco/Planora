import { Button, StyleSheet, Text, View } from "react-native";

import { useOnboardingStore } from "../../../state/onboarding-store";

export function GetStartedScreen() {
    const complete = useOnboardingStore((state) => state.complete);

    return (
        <View style={styles.container}>
            <Text>Get Started</Text>
            <Button title="Continue" onPress={complete} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
});
