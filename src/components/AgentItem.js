import React, { Component } from "react"
import { Text, View, StyleSheet, TouchableHighlight, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"

const AgentItem = (props) => {
  function OpenAgentDetail(uuid) {
    //console.log("https://valorant-api.com/v1/agents/" + uuid)
    navigation.navigate("AgentDetail", { uuid: uuid })
  }
  const navigation = useNavigation()
  return (
    <View>
      <TouchableHighlight
        underlayColor="#fa4454"
        onPress={() => OpenAgentDetail(props.uuid)}
      >
        <View style={styles.container}>
          <View style={styles.topContentFlex}>
            <Image
              source={{ uri: props.icon }}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.agentName}>{props.name}</Text>
          </View>

          <Text numberOfLines={3} style={styles.agentDescription}>
            {props.description}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  topContentFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  agentName: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
  agentDescription: {
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
})

export default AgentItem
