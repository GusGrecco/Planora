import { StyleSheet, Text, View } from "react-native";

import type { RootStackScreenProps } from "../types";

export function PlaceholderDetailScreen({
    route,
}: RootStackScreenProps<"PlaceholderDetail">) {
    return (
        <View style={styles.container}>
            <Text>{route.params.message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
