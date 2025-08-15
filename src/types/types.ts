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

export const mockCharacter: Character = {
  "id": 11,
  "name": "Albert Einstein",
  "status": "Dead",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/12"
  ],
  "url": "https://rickandmortyapi.com/api/character/11",
  "created": "2017-11-04T20:20:20.965Z"
}

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