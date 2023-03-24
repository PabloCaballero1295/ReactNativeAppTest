import React, { useState, useEffect } from "react"
import { Text, StyleSheet, View, ScrollView } from "react-native"

import { Divider } from "../components/Divider"
import MapItem from "../components/MapItem"
import { Loading } from "../components/Loading"

export function MapsScreen() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const url = "https://valorant-api.com/v1/maps?language=es-ES"

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
        data.map((map) => (
          <View key={map.uuid}>
            <MapItem
              uuid={map.uuid}
              name={map.displayName}
              icon={map.displayIcon}
              image={map.listViewIcon}
            ></MapItem>
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
  LoadingContainer: {
    flex: 1,
    fontSize: 20,
  },
})
