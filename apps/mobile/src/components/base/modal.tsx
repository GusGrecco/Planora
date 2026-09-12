import { Modal as RNModal, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { borderRadius, colors, spacing } from "../../theme/tokens";

type ModalProps = {
    visible: boolean;
    onDismiss: () => void;
    children: React.ReactNode;
};

/**
 * Base UI modal — a dismissible overlay with a bottom sheet-style panel.
 * Distinct from the navigation-level modal screens (#14): this is for
 * in-context dialogs (confirmations, selection lists), not full screens
 * registered as routes.
 */
export function Modal({ visible, onDismiss, children }: ModalProps) {
    return (
        <RNModal visible={visible} transparent animationType="slide" onRequestClose={onDismiss}>
            <Pressable
                style={{ flex: 1, backgroundColor: "rgba(9, 10, 11, 0.4)" }}
                onPress={onDismiss}
            >
                <View style={{ flex: 1 }} />
            </Pressable>
            <SafeAreaView edges={["bottom"]} style={{ backgroundColor: colors.background }}>
                <View
                    style={{
                        padding: spacing.md,
                        borderTopLeftRadius: borderRadius.lg,
                        borderTopRightRadius: borderRadius.lg,
                    }}
                >
                    {children}
                </View>
            </SafeAreaView>
        </RNModal>
    );
}
