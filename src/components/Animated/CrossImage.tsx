import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { imagesArray } from '../../data/crossImage';

import Animated, {
  FadeIn,
  FadeOut,
  FadeOutLeft,
  Layout,
} from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

const CrossImage = () => {
  const [data, setData] = useState(imagesArray);

  const onDelete = useCallback(
    (itemId: number) => {
      setData((currentItems) => {
        return currentItems.filter((item) => item.id !== itemId);
      });
    },
    [data]
  );

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      contentContainerStyle={{
        flex: 1,
      }}
    >
      {data.map((item) => {
        return (
          <Animated.View
            key={item.id}
            entering={FadeIn}
            exiting={FadeOutLeft}
            layout={Layout.delay(0)}
            // onTouchEnd={() => onDelete(item.id)}
            style={styles.listItem}
          >
            <Pressable onPress={() => onDelete(item.id)}>
              <AntDesign
                name='closecircleo'
                size={20}
                color='black'
                style={styles.closeIcon}
              />
              <Animated.Image source={item.image} style={styles.itemImage} />
            </Pressable>
          </Animated.View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'black',
    // marginRight: 0,
    // width: '100%',
    flexGrow: 1,
    flex: 1,
    // width: '100%',
    // flexDirection: 'row',
  },
  listItem: {
    backgroundColor: 'blue',
    margin: 10,
    // marginVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
    // Shadow on Android
    elevation: 5,
    // Shadow on iOS
    shadowColor: 'black',
    // shadowOpacity: 0.15,
    // shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
  },
  itemImage: {
    height: 50,
    width: 50,
  },
  closeIcon: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
  },
});
export default CrossImage;
