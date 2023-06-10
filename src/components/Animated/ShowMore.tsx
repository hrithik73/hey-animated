import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Animated, {
  EasingNode,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const ShowMore = () => {
  const height = useSharedValue(100);
  const [showMore, setShowMore] = useState(true);

  const cardAnmatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const showMoreLessHandler = () => {
    // height.value = showMore
    //   ? withSpring(400) setShowMore(false)
    //   : withSpring(100) setShowMore(true)
    if (showMore) {
      height.value = withSpring(200);
      setShowMore(false);
    } else {
      height.value = withSpring(100);
      setShowMore(true);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, cardAnmatedStyle]}>
        <Text ellipsizeMode='head' style={styles.para}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
          delectus. Sunt quibusdam quam iure distinctio ratione odio aliquid
          facere, deleniti quidem, quas assumenda esse voluptatem, voluptatibus
          porro id corrupti odit?
        </Text>
        <Button
          title={showMore ? ' show more' : 'show less'}
          onPress={showMoreLessHandler}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  para: {
    // textAlign: "left",
    // overflow: "hidden",
    color: 'black',
    flex: 1,
  },
  card: {
    padding: 5,
    margin: 10,
    backgroundColor: 'white',
    height: 100,
  },
});
export default ShowMore;
