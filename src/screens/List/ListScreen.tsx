import { useEffect, useState, FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, ActivityIndicator, View, StyleSheet, FlatList } from 'react-native';
import type { Character, NavigationProp } from '../../types/types';
import { GET } from '../../api/request';
import { CharacterTile } from '../../components/CharacterTile';
import { Header } from '../../components/Header';

export const ListScreen: FC = () => {
    const [data, setData] = useState<null | [Character]>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | unknown>(null);
    const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await GET('/character')
        setData(resp.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, []);

  if (loading) return (
    <View style={styles.load}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>

  )

  if (error) {
    Alert.alert('Error Fetch Data', 'Please try again later.', [
      {
        text: 'Ok',
        onPress: () => navigation.goBack()
      }
    ])
  }
  return (
    <View style={styles.container}>
      <Header title="Characters List" />

      {data && (
        <FlatList 
          data={data}
          renderItem={({item}) => <CharacterTile character={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  load: {
    flex: 1,
    justifyContent: 'center',
  }
})

