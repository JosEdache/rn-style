import React from 'react';
import {View, Text} from 'react-native';
import {makeStyle} from '@josedache/rn-style';

function Colors() {
  const styles = useStyle();
  return (
    <View style={styles.container}>
      <View style={[styles.color_container, styles.primary]}>
        <Text style={styles.text}>Primary Colors</Text>
      </View>
      <View style={[styles.color_container, styles.secondary]}>
        <Text style={styles.text}>Secondary Colors</Text>
      </View>
    </View>
  );
}

const useStyle = makeStyle(theme => ({
  container: {
    flex: 1,
    padding: theme.spacing(2),
  },
  color_container: {
    height: 100,
    margin: theme.spacing(),
    borderRadius: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.elevations.e2,
  },
  text: {
    ...theme.typography.h5,
    color: theme.colors.white,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.secondary,
  },
}));

Colors.routeName = 'Color Demo';

export default Colors;