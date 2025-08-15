import { FC } from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import type { NavigationProp } from '../types/types';
import { useNavigation } from '@react-navigation/native';
import BackIcon from "../../asset/back-icon.png";

type BackButtonProps = {
  isHeader?: boolean
}
export const BackButton: FC<BackButtonProps> = ({ isHeader = true }) => {
    const navigation = useNavigation<NavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <TouchableOpacity
      testID="back-button"
      onPress={handleBack}
      style={[ styles.container, !isHeader && styles.nonHeader ]} 
    >
      <Image style={styles.image} source={BackIcon} />
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 30,
    height: 30,
  },
  nonHeader: {
    padding: 5, 
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.6)',
  }
})