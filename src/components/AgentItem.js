import React, { Component } from "react"
import { Text, View, StyleSheet, TouchableHighlight, Image } from "react-native"

function OpenAgentDetail(uuid) {
  console.log("https://valorant-api.com/v1/agents/" + uuid)
}

const PresentationalComponent = (props) => {
  return (
    <View>
      <TouchableHighlight
        underlayColor="#fa4454"
        onPress={() => OpenAgentDetail(props.uuid)}
      >
        <View style={styles.container}>
          <Image
            source={{ uri: props.icon }}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.agentName}>{props.name}</Text>
          <Text style={styles.agentDescription}>{props.description}</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  agentName: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  agentDescription: {
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
})

export default PresentationalComponent
