import { Text, SafeAreaView, StyleSheet } from 'react-native';
import type { RootScreenProps } from '../../navigation/types';
import { Paths } from '../../navigation/paths';


export const DetailScreen = ({}: RootScreenProps<Paths.DetailScreen>) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DETAIL SCREEN!!!</Text>
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

