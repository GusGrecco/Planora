import { Button, StyleSheet, Text, View } from "react-native";

import { useSessionStore } from "../../../../state/session-store";

export function SettingsScreen() {
    const signOut = useSessionStore((state) => state.signOut);

    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <Button title="Logout" onPress={signOut} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
});
