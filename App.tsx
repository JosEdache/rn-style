import React, {Fragment} from 'react';
import {Button} from 'react-native';
import {createTheme, ThemeProvider} from '@josedache/rn-style';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ElevationDemo from './demo/Elevations';
import ColorDemo from './demo/Colors';
import TypographyDemo from './demo/Typography';

declare global {
  interface Theme {
    lack: '';
  }
}

const appTheme = createTheme({
  lack: '',
  colors: {
    primary: 'tomato',
  },
});

const routes: any[] = [ElevationDemo, ColorDemo, TypographyDemo];

function Home(props: any) {
  return (
    <Fragment>
      {routes.map(({routeName}) => (
        <Button
          title={routeName}
          key={routeName}
          onPress={() => props.navigation.navigate(routeName)}
        />
      ))}
    </Fragment>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          {routes.map(route => (
            <Stack.Screen
              key={route.routeName}
              name={route.routeName}
              component={route}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
