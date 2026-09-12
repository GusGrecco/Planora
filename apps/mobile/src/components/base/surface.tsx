import { View, type ViewProps } from "react-native";

import { colors, borderRadius } from "../../theme/tokens";
import { getElevation, type ElevationLevel } from "../../theme/elevation";

type RadiusKey = keyof typeof borderRadius;

type SurfaceProps = ViewProps & {
    radius?: RadiusKey;
    elevation?: ElevationLevel;
};

/**
 * Base container for elevated, rounded surfaces (cards, sheets, modals).
 * Combines the border-radius and elevation scales so features don't
 * compose raw shadow/radius values themselves.
 */
export function Surface({
    radius = "md",
    elevation = "low",
    style,
    ...props
}: SurfaceProps) {
    return (
        <View
            style={[
                {
                    backgroundColor: colors.background,
                    borderRadius: borderRadius[radius],
                    ...getElevation(elevation),
                },
                style,
            ]}
            {...props}
        />
    );
}
