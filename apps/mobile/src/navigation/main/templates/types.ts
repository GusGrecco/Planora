import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type TemplatesStackParamList = {
    TemplatesHome: undefined;
};

export type TemplatesStackScreenProps<T extends keyof TemplatesStackParamList> =
    NativeStackScreenProps<TemplatesStackParamList, T>;
