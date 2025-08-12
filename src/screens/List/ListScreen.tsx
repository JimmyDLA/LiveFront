import { Text, SafeAreaView, StyleSheet } from 'react-native';
import type { RootScreenProps } from '../../navigation/types';
import { Paths } from '../../navigation/paths';


export const ListScreen = ({}: RootScreenProps<Paths.ListScreen>) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LIST SCREEN!!!</Text>
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

