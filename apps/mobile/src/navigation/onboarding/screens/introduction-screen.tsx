import { Button, StyleSheet, Text, View } from "react-native";

import type { OnboardingStackScreenProps } from "../types";

export function IntroductionScreen({
    navigation,
}: OnboardingStackScreenProps<"Introduction">) {
    return (
        <View style={styles.container}>
            <Text>What Planora is</Text>
            <Button title="Next" onPress={() => navigation.navigate("Features")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
});
