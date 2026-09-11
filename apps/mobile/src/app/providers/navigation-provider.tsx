import type { PropsWithChildren } from "react";
import { NavigationContainer } from "@react-navigation/native";

export function NavigationProvider({ children }: PropsWithChildren) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
