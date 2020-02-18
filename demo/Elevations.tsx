import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {makeStyle, useTheme} from '@josedache/rn-style';

function Elevations() {
  const styles = useStyle();
  const theme = useTheme();
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.elevation_container, theme.elevations.e0]}>
        <Text style={styles.text}>Elevation 0</Text>
      </View>
      <View style={[styles.elevation_container, theme.elevations.e1]}>
        <Text style={styles.text}>Elevation 1</Text>
      </View>
      <View style={[styles.elevation_container, theme.elevations.e2]}>
        <Text style={styles.text}>Elevation 2</Text>
      </View>
      <View style={[styles.elevation_container, theme.elevations.e3]}>
        <Text style={styles.text}>Elevation 3</Text>
      </View>
      <View style={[styles.elevation_container, theme.elevations.e4]}>
        <Text style={styles.text}>Elevation 4</Text>
      </View>
      <View style={[styles.elevation_container, theme.elevations.e5]}>
        <Text style={styles.text}>Elevation 5</Text>
      </View>
      <View style={[styles.elevation_container, theme.elevations.e6]}>
        <Text style={styles.text}>Elevation 6</Text>
      </View>
      <View style={[styles.elevation_container, theme.elevations.e7]}>
        <Text style={styles.text}>Elevation 7</Text>
      </View>
    </ScrollView>
  );
}

const useStyle = makeStyle(theme => ({
  container: {
    padding: theme.spacing(2),
  },
  elevation_container: {
    height: 100,
    margin: theme.spacing(2),
    borderRadius: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  text: {
    ...theme.typography.h5,
    color: theme.colors.primary,
  },
}));

Elevations.routeName = 'Elevation Demo';

export default Elevations;
