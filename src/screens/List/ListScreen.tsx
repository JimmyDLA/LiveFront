import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import type { RootScreenProps } from '../../navigation/types';
import { Paths } from '../../navigation/paths';
import { GET } from '../../api/fetch';
import { CharacterTile } from '../../components/CharacterTile';


export const ListScreen = ({}: RootScreenProps<Paths.ListScreen>) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

  return (
    <SafeAreaView style={styles.container}>
      {data && (
        <FlatList 
          data={data}
          renderItem={({item}) => <CharacterTile character={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
          
        />
      )}
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a3a3aff'
  },
})

