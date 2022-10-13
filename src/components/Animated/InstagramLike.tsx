import React, { useEffect, useState } from "react"
import { View, StyleSheet, Text, Pressable, Button } from "react-native"
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated"
import { AntDesign } from "@expo/vector-icons"

const InstagramLike = () => {
  const [liked, setLiked] = useState(false)
  const scale = useSharedValue(0)

  const animateOnTap = () => {
    setLiked(!liked)
    scale.value = withSpring(1, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0))
      }
    })
  }

  // Detect the Double tap
  const doubleTap = Gesture.Tap()
    .runOnJS(true)
    .numberOfTaps(2)
    .onEnd((_event, success) => {
      if (success) {
        console.log("Double tapped")
        animateOnTap()
      }
    })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: Math.max(scale.value, 0),
        },
      ],
    }
  })

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text style={styles.heading}>Double Tap the post to see magic</Text>
        <GestureDetector gesture={doubleTap}>
          <View style={styles.post}>
            <Text style={styles.text}>
              You Liked? {"  "}
              {liked ? (
                <AntDesign name="heart" size={20} color="red" />
              ) : (
                <AntDesign name="hearto" size={20} />
              )}
            </Text>
            <Animated.View style={[styles.heart, animatedStyle]}>
              <AntDesign name="heart" color="gray" size={100} />
            </Animated.View>
          </View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },

  heading: {
    margin: 10,
    textAlign: "center",
  },
  post: {
    height: 150,
    position: "relative",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    justifyContent: "flex-end",
    padding: 20,
    alignItems: "flex-start",
  },
  text: {
    textAlign: "center",
  },
  heart: {
    position: "absolute",
    // Make me center
    left: "40%",
    top: "30%",
    justifyContent: "center",
    alignItems: "baseline",
  },
})
export default InstagramLike
