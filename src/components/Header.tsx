import { FC } from "react"
import { Text, SafeAreaView, StyleSheet, View } from "react-native"
import { BackButton } from "./BackButton"

type HeaderProps = {
  title?: string;
}

export const Header: FC<HeaderProps> = ({title}) => {
  return (
    <SafeAreaView testID="header-container" style={styles.container}>
      <View style={styles.subCont}>
        <BackButton />
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  subCont: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: '20%'
  }
})