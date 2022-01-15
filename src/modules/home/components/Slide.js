import React, {useRef} from 'react';
import {StyleSheet, View, Dimensions, Image, Animated} from 'react-native';
import {colors} from '../../../constant';

import {hScale, scale} from '../../../utils/resolutions';

const data = [1, 2, 3];

const {width} = Dimensions.get('window');

const Slide = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const keyExtractor = (_, index) => index.toString();

  const renderItem = () => {
    return (
      <View style={styles.vwImg}>
        <Image source={{uri: 'slide'}} style={styles.img} resizeMode="cover" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={{justifyContent: 'center'}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
      />
      <View style={styles.pagination}>
        {data.map((_, index) => {
          return <View key={index} style={[styles.dot]} />;
        })}
        <Animated.View
          style={[
            styles.dotIndicator,
            {
              transform: [
                {
                  translateX: Animated.divide(
                    scrollX,
                    width - scale(30),
                  ).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, scale(25)],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  vwImg: {
    width: width - scale(30),
    height: hScale(160),
    justifyContent: 'center',
    marginBottom: scale(10),
  },
  img: {
    width: '100%',
    height: hScale(160),
    borderRadius: scale(6),
  },
  pagination: {
    width: scale(70),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dot: {
    width: scale(20),
    height: scale(3),
    borderRadius: scale(20),
    backgroundColor: colors.gray,
  },
  dotIndicator: {
    width: scale(20),
    height: scale(3),
    borderRadius: scale(20),
    backgroundColor: colors.black,
    position: 'absolute',
    left: 0,
  },
});

export default Slide;
