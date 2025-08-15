import { FC } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Character } from "../types/types";

type CharacterProps = {
  character: Character
}

export const CharacterDetail: FC<CharacterProps> = ({character}) => {
  const statusLight = character.status === 'Alive' ? '🟢 ' : '🔴 ';

  return (
    <>
      <Image testID="image" style={styles.image} source={{uri: character.image}} />
      <View style={styles.card}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.key}>Status: </Text>
        <Text style={styles.value}>
          {statusLight} 
          {character.status}
        </Text>
        <Text style={styles.key}>Origin:</Text>
        <Text style={styles.value}>{character.origin.name}</Text>
        <Text style={styles.key}>Species:</Text>
        <Text style={styles.value}>{character.species}</Text>
        <Text style={styles.key}>Gender:</Text>
        <Text style={styles.value}>{character.gender}</Text>
      </View>
    </>
  ) 
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400
  },
  card: {
    marginTop: -20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    height: '100%',
    width: '100%'
  },
  name: {
    fontSize: 40,
    fontWeight: '800',
    paddingBottom: 30,
  },
  key: {
    fontSize: 22,
    fontWeight: '700',
    color: '#757575ff'
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
  }
})