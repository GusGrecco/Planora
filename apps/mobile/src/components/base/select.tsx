import { useState } from "react";
import { FlatList, Pressable } from "react-native";

import { spacing } from "../../theme/tokens";
import { Icon } from "./icon";
import { Modal } from "./modal";
import { Stack } from "./stack";
import { Text } from "./text";

export type SelectOption<T> = {
    label: string;
    value: T;
};

type SelectProps<T> = {
    label?: string;
    options: SelectOption<T>[];
    value: T | undefined;
    onChange: (value: T) => void;
    placeholder?: string;
    disabled?: boolean;
};

/**
 * Base select — opens a bottom-sheet list of options via the base Modal.
 * Fully controlled and generic over the option value type; carries no
 * knowledge of what the options represent.
 */
export function Select<T>({
    label,
    options,
    value,
    onChange,
    placeholder = "Select an option",
    disabled = false,
}: SelectProps<T>) {
    const [isOpen, setIsOpen] = useState(false);

    const selected = options.find((option) => option.value === value);

    return (
        <Stack gap="xs">
            {label ? (
                <Text variant="caption" color="muted">
                    {label}
                </Text>
            ) : null}

            <Pressable
                disabled={disabled}
                onPress={() => setIsOpen(true)}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    opacity: disabled ? 0.5 : 1,
                }}
            >
                <Text color={selected ? "default" : "muted"}>
                    {selected?.label ?? placeholder}
                </Text>
                <Icon name="chevron-down" size="sm" color="muted" />
            </Pressable>

            <Modal visible={isOpen} onDismiss={() => setIsOpen(false)}>
                <FlatList
                    data={options}
                    keyExtractor={(_, index) => String(index)}
                    ItemSeparatorComponent={() => <Stack gap="xs" />}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => {
                                onChange(item.value);
                                setIsOpen(false);
                            }}
                            style={{ paddingVertical: spacing.sm }}
                        >
                            <Text variant={item.value === value ? "bodyStrong" : "body"}>
                                {item.label}
                            </Text>
                        </Pressable>
                    )}
                />
            </Modal>
        </Stack>
    );
}
