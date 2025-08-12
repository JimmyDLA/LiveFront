import { Text, SafeAreaView, StyleSheet } from 'react-native';
import type { RootScreenProps } from '../../navigation/types';
import { Paths } from '../../navigation/paths';


export const HomeScreen = ({}: RootScreenProps<Paths.HomeScreen>) => {
  return ( 
    <SafeAreaView style={styles.container}>
      <Text>HOME SCREEN!!!</Text>
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

