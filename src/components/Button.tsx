
import { FC } from "react"
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native"

type ButtonProps = {
  onPress: () => void,
  title: string,
  loading?: boolean,
}
export const Button: FC<ButtonProps> = ({ onPress, title, loading = false }) => {
  return (
    <TouchableOpacity testID="primary-button" style={styles.button} onPress={onPress}>
      {loading ? (
        <ActivityIndicator testID="loading" size="large" color="#ffffffff" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1452b7ff',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
    buttonText: {
    color: '#ffffffff',
    fontWeight: '600',
    fontSize: 20,
  },
})