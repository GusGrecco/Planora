import { Pressable } from "react-native";

import { borderRadius, colors, sizing } from "../../theme/tokens";
import { Icon } from "./icon";

type CheckboxProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
};

/**
 * Base checkbox. Fully controlled — the caller owns `checked` state.
 */
export function Checkbox({ checked, onChange, disabled = false }: CheckboxProps) {
    return (
        <Pressable
            accessibilityRole="checkbox"
            accessibilityState={{ checked, disabled }}
            disabled={disabled}
            onPress={() => onChange(!checked)}
            style={{
                width: sizing.icon.md,
                height: sizing.icon.md,
                borderRadius: borderRadius.sm,
                borderWidth: 1,
                borderColor: checked ? colors.primary : colors.neutral[300],
                backgroundColor: checked ? colors.primary : "transparent",
                alignItems: "center",
                justifyContent: "center",
                opacity: disabled ? 0.5 : 1,
            }}
        >
            {checked ? <Icon name="checkmark" size="sm" color="inverse" /> : null}
        </Pressable>
    );
}
