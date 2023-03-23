import { Text, StyleSheet, View, ScrollView } from "react-native"

export function MapsScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <Text>Maps</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ece8e1",
  },
})
