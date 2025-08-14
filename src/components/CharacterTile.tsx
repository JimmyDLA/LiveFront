import { FC } from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import type { Character, NavigationProp } from '../types/types';
import { useNavigation } from '@react-navigation/native';
import { Paths } from '../navigation/paths';

type CharactersProps = {
  character: Character
}

export const CharacterTile: FC<CharactersProps> = ({character}) => {
  const navigation = useNavigation<NavigationProp>();

  const handleDetailScreen = () => {
    navigation.navigate(Paths.DetailScreen, {character})
  }
  return (
    <TouchableOpacity onPress={handleDetailScreen} style={styles.container}>
      <ImageBackground 
        source={{uri: character.image}} 
        resizeMode="cover" 
        style={styles.background} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
  background: {
    height: 200,
  }
})