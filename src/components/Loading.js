import React from "react"
import { StyleSheet, View, Text } from "react-native"

export function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cargando contenido</Text>
      <Text style={styles.subtitle}>Por favor espere</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "60%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 30 },
  subtitle: { fontSize: 20 },
})
