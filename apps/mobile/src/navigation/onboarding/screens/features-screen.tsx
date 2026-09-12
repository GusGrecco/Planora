import { Button, StyleSheet, Text, View } from "react-native";

import type { OnboardingStackScreenProps } from "../types";

export function FeaturesScreen({
    navigation,
}: OnboardingStackScreenProps<"Features">) {
    return (
        <View style={styles.container}>
            <Text>Task organization & time planning</Text>
            <Button title="Next" onPress={() => navigation.navigate("GetStarted")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
});
