import { StyleSheet, Text, View } from "react-native";

export function CalendarScreen() {
    return (
        <View style={styles.container}>
            <Text>Calendar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
