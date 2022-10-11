import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Button, FlatList, StyleSheet, Text, View } from "react-native"
import components from "../config/components"

// TODO:- Fix the types
const ComponentListCard = ({ item }: any) => {
  const navigation = useNavigation<any>()
  return (
    <View style={styles.card}>
      <Button
        title={item.screenName}
        onPress={() => navigation.navigate(item.screenName)}
      />
    </View>
  )
}

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Collection of Animated Components</Text>
      <FlatList
        data={components}
        renderItem={({ item }) => <ComponentListCard item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    marginVertical: 10,
  },
  card: {
    height: 100,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
})
export default Home
