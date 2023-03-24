import React, { useState, useEffect } from "react"
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from "react-native"
import AgentItem from "../components/AgentItem"
import { Divider } from "../components/Divider"

export function AgentDetail({ route }) {
  const uuid = route.params.uuid

  const [agentData, setAgentData] = useState([])
  const [loading, setLoading] = useState(true)

  const url = "https://valorant-api.com/v1/agents/" + uuid + "?language=es-ES"

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setAgentData(json.data)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <ScrollView style={styles.scrollView}>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <View>
          <Text>{agentData.displayName}</Text>
          <Text>{agentData.description}</Text>
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#ece8e1",
  },
})
