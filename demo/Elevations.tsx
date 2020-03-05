import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {
  makeStyle,
  shadow,
  SurfaceOverlay,
  LayoutBox,
  Text as StyledText,
} from '@josedache/rn-style';

function Elevations() {
  const styles = useStyle();
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.elevation_container, shadow(0)]}>
        <SurfaceOverlay overlay={0} />
        <Text style={styles.text}>Elevation 0</Text>
      </View>
      <View style={[styles.elevation_container, shadow(1)]}>
        <SurfaceOverlay overlay={1} />
        <Text style={styles.text}>Elevation 1</Text>
      </View>
      <LayoutBox
        height={100}
        justifyContent="center"
        alignItems="center"
        margin={8}
        elevation={2}
        overlayBrand="secondary">
        <StyledText style={styles.text} category="h4">
          Elevation 2
        </StyledText>
      </LayoutBox>
      <View style={[styles.elevation_container, shadow(3)]}>
        <View style={styles.overlay} />
        <SurfaceOverlay overlay={3} />
        <Text style={styles.text}>Elevation 3</Text>
      </View>
      <View style={[styles.elevation_container, shadow(4)]}>
        <Text style={styles.text}>Elevation 4</Text>
      </View>
      <View style={[styles.elevation_container, shadow(5)]}>
        <Text style={styles.text}>Elevation 5</Text>
      </View>
      <View style={[styles.elevation_container, shadow(6)]}>
        <SurfaceOverlay overlay={6} />
        <Text style={styles.text}>Elevation 6</Text>
      </View>
      <View style={[styles.elevation_container, shadow(7)]}>
        <Text style={styles.text}>Elevation 7</Text>
      </View>
    </ScrollView>
  );
}

const useStyle = makeStyle(theme => ({
  container: {
    padding: theme.spacing(2),
    backgroundColor: theme.colors.background,
    borderRadius: 8,
  },
  elevation_container: {
    height: 100,
    margin: theme.spacing(2),
    borderRadius: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.brandSurfaceOverlay,
  },
  text: {
    ...theme.typography.h5,
    color: theme.colors.secondary,
  },
}));

Elevations.routeName = 'Elevation Demo';

export default Elevations;
