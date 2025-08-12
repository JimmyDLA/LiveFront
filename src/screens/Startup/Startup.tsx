import { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import type { RootScreenProps } from '../../navigation/types';
import { Paths } from '../../navigation/paths';


export const Startup = ({ navigation }: RootScreenProps<Paths.Startup>) => {

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

