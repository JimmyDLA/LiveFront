import { FC } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import type { RootScreenProps } from '../../types/types';
import { Paths } from '../../navigation/paths';
import { CharacterDetail } from '../../components/CharacterDetail';
import { BackButton } from '../../components/BackButton';


export const DetailScreen: FC<RootScreenProps<Paths.DetailScreen>> = ({route}) => {
  const { character } = route.params;
  return (
    <ScrollView>
      <View style={styles.backCont}>
        <BackButton isHeader={false} />
      </View>
      <CharacterDetail character={character} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backCont: {
    position: 'absolute',
    zIndex: 1,
    top: 50,
    left: 10,
  }
})

