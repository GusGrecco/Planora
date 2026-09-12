import type { PropsWithChildren } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";

enableScreens();

export function NavigationProvider({ children }: PropsWithChildren) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
