import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp, } from '@react-navigation/native-stack';
import type { Paths } from '../navigation/paths';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type RootStackParamList = {
  [Paths.Startup]: undefined;
  [Paths.HomeScreen]: undefined;
  [Paths.DetailScreen]: {character: Character};
  [Paths.ListScreen]: undefined;
};

export type RootScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};