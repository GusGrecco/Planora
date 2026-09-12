import { ActivityIndicator, Pressable, type PressableProps } from "react-native";

import { borderRadius, colors, sizing, spacing } from "../../theme/tokens";
import { Icon } from "./icon";
import { Text } from "./text";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = Omit<PressableProps, "children"> & {
    label: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    disabled?: boolean;
    iconName?: React.ComponentProps<typeof Icon>["name"];
};

const HEIGHT_MAP: Record<ButtonSize, number> = {
    sm: sizing.control.sm,
    md: sizing.control.md,
    lg: sizing.control.lg,
};

const VARIANT_STYLE: Record<
    ButtonVariant,
    { background: string; textColor: "default" | "inverse" | "primary"; borderColor?: string }
> = {
    primary: { background: colors.primary, textColor: "inverse" },
    secondary: { background: colors.secondary, textColor: "inverse" },
    outline: { background: "transparent", textColor: "primary", borderColor: colors.primary },
    ghost: { background: "transparent", textColor: "primary" },
};

/**
 * Base button. Not aware of any feature/business logic — `onPress` is
 * the caller's responsibility. `loading` disables interaction and shows
 * a spinner in place of the icon.
 */
export function Button({
    label,
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    iconName,
    style,
    ...props
}: ButtonProps) {
    const isDisabled = disabled || loading;
    const { background, textColor, borderColor } = VARIANT_STYLE[variant];

    return (
        <Pressable
            accessibilityRole="button"
            accessibilityState={{ disabled: isDisabled, busy: loading }}
            disabled={isDisabled}
            style={({ pressed }) => [
                {
                    height: HEIGHT_MAP[size],
                    paddingHorizontal: spacing.md,
                    borderRadius: borderRadius.md,
                    backgroundColor: background,
                    borderWidth: borderColor ? 1 : 0,
                    borderColor,
                    opacity: isDisabled ? 0.5 : pressed ? 0.8 : 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: spacing.xs,
                },
                typeof style === "function" ? undefined : style,
            ]}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={textColor === "inverse" ? colors.background : colors.primary} />
            ) : (
                <>
                    {iconName ? <Icon name={iconName} size="sm" color={textColor} /> : null}
                    <Text variant="bodyStrong" color={textColor}>
                        {label}
                    </Text>
                </>
            )}
        </Pressable>
    );
}