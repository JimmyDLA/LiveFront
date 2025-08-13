import type { StackScreenProps } from '@react-navigation/stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { Paths } from './paths';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
  [Paths.Startup]: undefined;
  [Paths.HomeScreen]: undefined;
  [Paths.DetailScreen]: undefined;
  [Paths.ListScreen]: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
