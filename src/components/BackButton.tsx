import { FC } from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import type { NavigationProp } from '../types/types';
import { useNavigation } from '@react-navigation/native';
import BackIcon from "../../asset/back-icon.png";

export const  BackButton: FC = () => {
    const navigation = useNavigation<NavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleBack}>
      <Image style={styles.image} source={BackIcon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 30,
    height: 30,
  }
})