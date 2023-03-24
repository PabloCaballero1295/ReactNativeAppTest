import React, { useState, useEffect } from "react"
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native"

import { Loading } from "../components/Loading"

export function AgentDetail({ route }) {
  const uuid = route.params.uuid

  const [agentData, setAgentData] = useState([])
  const [loading, setLoading] = useState(true)

  const url = "https://valorant-api.com/v1/agents/" + uuid + "?language=es-ES"

  const [abilityIndex, setAbilityIndex] = useState(0)

  const setAbilityToDisplay = (value) => {
    setAbilityIndex(value)
  }

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
        <Loading />
      ) : (
        <View>
          <Image
            source={{ uri: agentData.fullPortrait }}
            resizeMode="contain"
            style={styles.image}
          ></Image>

          <View style={styles.AgentDataContainer}>
            <Text style={styles.AgentName}>{agentData.displayName}</Text>
            <Text style={styles.AgentDescription}>{agentData.description}</Text>
          </View>

          <View style={styles.BlueBackground}>
            <Text style={styles.RoleTitle}>ROL</Text>
            <View style={styles.RoleFlex}>
              <Text style={styles.AgentRole}>{agentData.role.displayName}</Text>
              <Image
                style={styles.RoleImage}
                source={{ uri: agentData.role.displayIcon }}
              ></Image>
            </View>
            <Text style={styles.AgentRoleDescription}>
              {agentData.role.description}
            </Text>
          </View>
          <View style={styles.AgentDataContainer}>
            <Text style={styles.AbilitiesTitle}> Habilidades</Text>
            <View style={styles.AbilitiesFlex}>
              {agentData.abilities.map((ability, index) => (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => {
                    setAbilityToDisplay(index)
                  }}
                  style={styles.AbilityImageButton}
                >
                  <Image
                    source={{ uri: ability.displayIcon }}
                    style={
                      index == abilityIndex
                        ? styles.AbilityImageSelected
                        : styles.AbilityImage
                    }
                  ></Image>
                </TouchableWithoutFeedback>
              ))}
            </View>
            <Text style={styles.AbilityName}>
              {agentData.abilities[abilityIndex].displayName}
            </Text>
            <Text style={styles.AbilityDescription}>
              {agentData.abilities[abilityIndex].description}
            </Text>
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
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  AgentDataContainer: {
    marginHorizontal: 20,
  },
  AgentName: {
    fontSize: 40,
    fontWeight: "bold",
  },
  AgentDescription: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 30,
  },
  RoleTitle: {
    color: "#ece8e1",
    fontSize: 14,
  },
  AgentRole: {
    color: "#ece8e1",
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: "bold",
  },
  AgentRoleDescription: {
    color: "#ece8e1",
    fontSize: 14,
    marginVertical: 10,
  },
  RoleFlex: {
    flexDirection: "row",
  },
  RoleImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  BlueBackground: {
    backgroundColor: "#364966",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  AbilitiesFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  AbilityImageSelected: {
    width: 50,
    height: 50,
    tintColor: "black",
  },
  AbilityImage: {
    width: 50,
    height: 50,
    tintColor: "gray",
  },
  AbilitySelected: {},
  AbilityImageButton: {
    width: 50,
    height: 50,
  },
  AbilityDescription: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 50,
  },
  AbilitiesTitle: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },

  AbilityName: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: "bold",
  },
})
