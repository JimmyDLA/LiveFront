import { FC } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';
import type { NavigationProp } from '../../types/types';
import { Paths } from '../../navigation/paths';
import { useNavigation } from '@react-navigation/native';
import background from '../../../asset/background.jpg';
import portal from '../../../asset/portal.png';
import logo from '../../../asset/Rick_and_Morty.png';

export const HomeScreen: FC = () => {
  const navigation = useNavigation<NavigationProp>();
  
  const handleList = () => {
    navigation.navigate(Paths.ListScreen)
  }

  return ( 
    <ImageBackground style={styles.container} resizeMode='cover' source={background}>
      <View style={styles.logoCont}>
        <Image style={styles.portal} resizeMode='contain' source={portal}/>
        <Image style={styles.logo} resizeMode='contain' source={logo} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleList}>
        <Text style={styles.buttonText}>Show List</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1452b7ff',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
  portal: { 
    height: 300, 
    position: 'absolute'
  },
  logo: {
    height: 100
  },
  logoCont: { 
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center',
  }
})

