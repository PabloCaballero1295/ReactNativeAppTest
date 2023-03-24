import React from "react"
import { Text, View, StyleSheet, TouchableHighlight, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"

const MapItem = (props) => {
  const navigation = useNavigation()

  function OpenMapDetail(uuid) {
    navigation.navigate("MapDetail", { uuid: uuid })
  }

  return (
    <View>
      <TouchableHighlight
        underlayColor="#fa4454"
        onPress={() => OpenMapDetail(props.uuid)}
      >
        <View style={styles.container}>
          <View style={styles.topContentFlex}>
            <Image source={{ uri: props.image }} style={styles.image} />
          </View>
          <Text style={styles.mapName}>{props.name}</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  topContentFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mapName: {
    flex: 1,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  mapDescription: {
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: undefined,
    resizeMode: "cover",
    aspectRatio: 4,
    marginVertical: 20,
  },
})

export default MapItem
