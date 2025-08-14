import React from 'react';
import type { RootStackParamList } from '../types/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  HomeScreen,
  ListScreen,
  DetailScreen,
} from '../screens/';
import { Paths } from './paths';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Paths.HomeScreen} component={HomeScreen} />
        <Stack.Screen name={Paths.ListScreen} component={ListScreen} />
        <Stack.Screen name={Paths.DetailScreen} component={DetailScreen} />
      </Stack.Navigator>
  );
}