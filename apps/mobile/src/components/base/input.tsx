import { useState } from "react";
import { TextInput, View, type TextInputProps } from "react-native";

import { borderRadius, colors, sizing, spacing } from "../../theme/tokens";
import { Stack } from "./stack";
import { Text } from "./text";

type InputProps = TextInputProps & {
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
};

/**
 * Base text input with label, helper text, and error states. No
 * validation logic — `error` is purely a presentational flag passed in
 * by the caller.
 */
export function Input({
    label,
    error,
    helperText,
    disabled = false,
    style,
    onFocus,
    onBlur,
    ...props
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);

const borderColor = error ? colors.danger : isFocused ? colors.primary : colors.neutral[300];

    return (
        <Stack gap="xs">
            {label ? (
                <Text variant="caption" color="muted">
                    {label}
                </Text>
            ) : null}

            <View
                style={{
                    height: sizing.control.md,
                    borderRadius: borderRadius.md,
                    borderWidth: 1,
                    borderColor,
                    backgroundColor: disabled ? colors.neutral[100] : colors.background,
                    paddingHorizontal: spacing.sm,
                    justifyContent: "center",
                }}
            >
                <TextInput
                    editable={!disabled}
                    onFocus={(e) => {
                        setIsFocused(true);
                        onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setIsFocused(false);
                        onBlur?.(e);
                    }}
                    placeholderTextColor={colors.neutral[400]}
                    style={[{ fontSize: 16, color: colors.text }, style]}
                    {...props}
                />
            </View>

            {error ? (
                <Text variant="caption" color="danger">
                    {error}
                </Text>
            ) : helperText ? (
                <Text variant="caption" color="muted">
                    {helperText}
                </Text>
            ) : null}
        </Stack>
    );
}
