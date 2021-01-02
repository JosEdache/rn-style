import React from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {shadow, StyleView, StyleText, StyleScrollView} from '../src';

const AnimatedStyleView = Animated.createAnimatedComponent(StyleView);

function Elevations() {
  const elevation = React.useRef(new Animated.Value(0)).current;

  Animated.timing(elevation, {
    toValue: 5,
    duration: 2000,
    useNativeDriver: false,
  }).start();

  return (
    <StyleScrollView style={styles.container} backgroundColor="pink">
      <AnimatedStyleView
        style={[styles.elevation_container, shadow(elevation)]}>
        <StyleText>Elevation 0</StyleText>
      </AnimatedStyleView>
      {/* <View elevation={12} borderWidth={1} backgroundColor='pink'>
        <Text>Text</Text>
      </View> */}
      <View style={[styles.elevation_container, shadow(1)]}>
        <Text>Elevation 1</Text>
      </View>
      <AnimatedStyleView
        height={100}
        justifyContent="center"
        alignItems="center"
        margin={8}
        backgroundColor="white"
        borderRadius={8}
        elevation={elevation}>
        <StyleText>Elevation 2</StyleText>
      </AnimatedStyleView>
      <View style={[styles.elevation_container, shadow(3)]}>
        <Text>Elevation 3</Text>
      </View>
      <View style={[styles.elevation_container, shadow(4)]}>
        <Text>Elevation 4</Text>
      </View>
      <View style={[styles.elevation_container, shadow(5)]}>
        <Text>Elevation 5</Text>
      </View>
      <View style={[styles.elevation_container, shadow(6)]}>
        <Text>Elevation 6</Text>
      </View>
      <View style={[styles.elevation_container, shadow(7)]}>
        <Text>Elevation 7</Text>
      </View>
    </StyleScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    // backgroundColor: 'yellow',
    borderRadius: 8,
  },
  elevation_container: {
    height: 100,
    margin: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

Elevations.routeName = 'Elevation Demo';

export default Elevations;
