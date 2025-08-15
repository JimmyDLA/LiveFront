import { useEffect, useState, FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, View, StyleSheet, FlatList } from 'react-native';
import type { Character, NavigationProp } from '../../types/types';
import { GET, BASE_URL } from '../../api/request';
import { CharacterTile } from '../../components/CharacterTile';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

export const ListScreen: FC = () => {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | unknown>(null);
  const [fetchUrl, setFetchUrl] = useState<string>(`${BASE_URL}/character`);
  const navigation = useNavigation<NavigationProp>();

  const fetchData = async () => {
    try {
      setLoading(true)
      const resp = await GET(fetchUrl)
      setData(prev => [...prev, ...resp.results]);
      setFetchUrl(resp.info.next);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

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
          ListFooterComponent={
            <View style={styles.footer}>
              <Button onPress={fetchData} title='Show More' loading={loading} />
            </View>
          }
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
  },
  footer: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

