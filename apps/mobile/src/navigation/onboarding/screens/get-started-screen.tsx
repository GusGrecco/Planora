import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../../types";

export function GetStartedScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Text>Get Started</Text>
            {/*
        Temporary: navigates to Auth > Login, since the Main Application
        navigator does not exist yet (next sub-issue of #8). Once Main
        is implemented, this should route there instead — and once
        navigation guards are implemented, this screen won't need to
        navigate manually at all (completing onboarding will just flip
        the guarded state and the root navigator will re-render).
      */}
            <Button
                title="Continue"
                onPress={() => navigation.navigate("Auth", { screen: "Login" })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
});
