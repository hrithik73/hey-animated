import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import components from "../config/components"
import Home from "../screens/Home"

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      {components.map((item) => {
        return (
          <Stack.Screen
            name={item.screenName}
            component={item.screenComponent}
          />
        )
      })}
    </Stack.Navigator>
  )
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
