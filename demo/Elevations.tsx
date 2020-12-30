import React from 'react';
import {View, Text, ScrollView, Animated} from 'react-native';
import {makeStyle, shadow, StyleView, StyleText} from '../src';

const elevation = new Animated.Value(0);

function Elevations() {
  const styles = useStyle();
  Animated.timing(elevation, {
    toValue: 5,
    duration: 2000,
    useNativeDriver: false,
  }).start();
  return (
    <ScrollView style={styles.container}>
      {/* <StyleView style={[styles.elevation_container, shadow(elevation)]}>
        <Text>Elevation 0</Text>
      </StyleView> */}
      <View style={[styles.elevation_container, shadow(1)]}>
        <Text>Elevation 1</Text>
      </View>
      {/* <StyleView
        height={100}
        justifyContent="center"
        alignItems="center"
        margin={8}
        backgroundColor="white"
        borderRadius={8}
        elevation={elevation}>
        <StyleText>Elevation 2</StyleText>
      </StyleView> */}
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
    </ScrollView>
  );
}

const useStyle = makeStyle(() => ({
  container: {
    padding: 8,
    backgroundColor: 'yellow',
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
}));

Elevations.routeName = 'Elevation Demo';

export default Elevations;
