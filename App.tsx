import React, {Fragment} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ElevationDemo from './demo/Elevations';
import TypographyDemo from './demo/Typography';

const routes: any[] = [ElevationDemo, TypographyDemo];

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
  );
}

export default App;
