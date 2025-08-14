import { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import type { NavigationProp } from '../../types/types';
import { useNavigation } from '@react-navigation/native';
import { Paths } from '../../navigation/paths';


export const Startup = () => {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: Paths.HomeScreen }],
      });
    }, 2000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text>START UP!!!</Text>
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

