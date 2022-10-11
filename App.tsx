import { StatusBar } from "expo-status-bar"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import AppNavigator from "./src/navigators"

export default function App() {
  return (
    <>
      <StatusBar />
      <AppNavigator />
    </>
  )
}
