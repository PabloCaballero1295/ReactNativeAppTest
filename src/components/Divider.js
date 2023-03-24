import React, { useState, useEffect } from "react"
import { StyleSheet, View } from "react-native"

export function Divider() {
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  divider: {
    height: 1,
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: "#b38c8f",
  },
})
