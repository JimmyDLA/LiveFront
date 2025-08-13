import { Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import type { RootScreenProps, NavigationProp } from '../../navigation/types';
import { Paths } from '../../navigation/paths';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = ({}: RootScreenProps<Paths.HomeScreen>) => {
  const navigation = useNavigation<NavigationProp>();
  
  const handleList = () => {
    navigation.navigate(Paths.ListScreen)
  }
  
  return ( 
    <SafeAreaView style={styles.container}>
      <Text>HOME SCREEN!!!</Text>
      <TouchableOpacity style={styles.button} onPress={handleList}>
        <Text style={styles.buttonText}>Show List</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1971ffff',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
  }
})

