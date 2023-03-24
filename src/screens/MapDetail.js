import React, { useState, useEffect } from "react"
import { Text, StyleSheet, View, ScrollView, Image } from "react-native"

import { Loading } from "../components/Loading"

export function MapDetail({ route }) {
  const uuid = route.params.uuid

  const [mapData, setMapData] = useState([])
  const [loading, setLoading] = useState(true)

  const url = "https://valorant-api.com/v1/maps/" + uuid + "?language=es-ES"

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setMapData(json.data)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <ScrollView style={styles.scrollView}>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <Image
            source={{ uri: mapData.splash }}
            style={styles.mapImage}
          ></Image>
          <View style={styles.mapDataContainer}>
            <Text style={styles.mapName}>{mapData.displayName}</Text>
            <Image
              source={{ uri: mapData.displayIcon }}
              style={styles.mapLayout}
            ></Image>
          </View>
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
  mapImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.775,
    resizeMode: "contain",
  },
  mapDataContainer: {
    marginHorizontal: 20,
  },
  mapName: {
    fontSize: 40,
    fontWeight: "bold",
  },
  mapLayout: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
})
