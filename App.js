import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import "react-native-gesture-handler"
import { AgentsScreen } from "./src/screens/AgenstScreen"
import { MapsScreen } from "./src/screens/MapsScreen"

const Menu = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator
        hea
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
