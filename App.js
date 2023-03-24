import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import "react-native-gesture-handler"
import { AgentsScreen } from "./src/screens/AgenstScreen"
import { MapsScreen } from "./src/screens/MapsScreen"

import { AgentDetail } from "./src/screens/AgentDetail"

const Stack = createNativeStackNavigator()
const Menu = createDrawerNavigator()

export default function App() {
  function Home() {
    return (
      <Menu.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: "#fa4454",
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "white",
          drawerStyle: {
            backgroundColor: "#111",
          },
        }}
      >
        <Menu.Screen
          styles={{ backgroundColor: "blue" }}
          name="Agents"
          component={AgentsScreen}
          options={{
            title: "Agentes",
            headerStyle: {
              backgroundColor: "#111",
            },
            headerTintColor: "#fff",
          }}
        />
        <Menu.Screen
          name="Maps"
          options={{
            title: "Mapas",
            headerStyle: {
              backgroundColor: "#111",
            },
            headerTintColor: "#fff",
          }}
          component={MapsScreen}
        />
      </Menu.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Agents"
          component={AgentsScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="AgentDetail"
          component={AgentDetail}
          options={{
            title: "Detalles del Agente",
            headerStyle: {
              backgroundColor: "#fa4454",
            },
            headerTintColor: "white",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
      {/*
      <Menu.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: "#fa4454",
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "white",
          drawerStyle: {
            backgroundColor: "#111",
          },
        }}
      >
        <Menu.Screen
          styles={{ backgroundColor: "blue" }}
          name="Agents"
          component={AgentsScreen}
          options={{
            title: "Agentes",
            headerStyle: {
              backgroundColor: "#111",
            },
            headerTintColor: "#fff",
          }}
        />
        <Menu.Screen
          name="Maps"
          options={{
            title: "Mapas",
            headerStyle: {
              backgroundColor: "#111",
            },
            headerTintColor: "#fff",
          }}
          component={MapsScreen}
        />
      </Menu.Navigator>
      */}
      <StatusBar backgroundColor="#111" barStyle="light-content" />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AAAAAA",
    alignItems: "center",
    justifyContent: "center",
  },
})
