import { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import images from '../../assets/images';
import { StyleSheet } from 'react-native';

const Splash = () => {
  const position = useSharedValue(-200);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: position.value }],
    };
  });
  useEffect(() => {
    position.value = withSpring(300, {
      stiffness: 50,
    });
  }, []);

  return (
    <Animated.View style={styles.container}>
      <Animated.Image
        source={images.reddit_logo}
        style={[{ height: 100, width: 100 }, animatedStyles]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#252525',
  },
});

export default Splash;
