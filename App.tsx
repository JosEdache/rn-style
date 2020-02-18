import React from 'react';
import {View, Text} from 'react-native';
import {makeStyle, createTheme, RNStyleThemeProvider} from './src';

const appTheme = createTheme({
  lack: '',
  colors: {
    primary: 'green',
  },
});

declare global {
  interface Theme {
    lack: '';
  }
}

function App() {
  const styles = useStyle();
  return (
    <RNStyleThemeProvider theme={appTheme}>
      <View style={styles.container}>
        <Text>Hello Make Style</Text>
        <Day />
      </View>
    </RNStyleThemeProvider>
  );
}

function Day() {
  const styles = useStyle();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Make Style</Text>
    </View>
  );
}
const useStyle = makeStyle(theme => ({
  container: {
    backgroundColor: theme.colors.primary,
    ...theme.elevations.e12,
    padding: theme.spacing(),
  },
  text: {
    ...theme.typography.h1,
  },
}));

export default App;
