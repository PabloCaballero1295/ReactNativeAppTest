import { Text, StyleSheet, View, ScrollView } from "react-native"

export function AgentsScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <Text>Agents</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ece8e1",
  },
})
