import React, { useState, useEffect } from "react"
import { Text, StyleSheet, View, ScrollView } from "react-native"
import AgentItem from "../components/AgentItem"
import { Divider } from "../components/Divider"
import { Loading } from "../components/Loading"

export function AgentsScreen() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const url =
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-ES"

  function SortData(data) {
    data.sort((a, b) => {
      const nameA = a.displayName.toUpperCase()
      const nameB = b.displayName.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      return 0
    })
    return data
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(SortData(json.data))
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <ScrollView style={styles.scrollView}>
      {loading ? (
        <Loading />
      ) : (
        data.map((agent) => (
          <View key={agent.uuid}>
            <AgentItem
              uuid={agent.uuid}
              name={agent.displayName}
              description={agent.description}
              icon={agent.displayIcon}
            />
            <Divider />
          </View>
        ))
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
