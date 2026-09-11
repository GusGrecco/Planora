import type { PropsWithChildren } from "react";
import { SafeAreaProvider as RNSafeAreaProvider } from "react-native-safe-area-context";

export function SafeAreaProvider({ children }: PropsWithChildren) {
  return <RNSafeAreaProvider>{children}</RNSafeAreaProvider>;
}
