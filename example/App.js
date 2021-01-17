import {StatusBar} from 'expo-status-bar';
import React from 'react';
import rnStyle, {
  StyleView,
  StyleTouchableOpacity,
  StyleText,
  StyleProvider,
} from '@josedache/react-native-style';
import {TouchableOpacityProps, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonHeight: {
    minHeight: 35,
    minWidth: 56,
    margin: 8,
    backgroundColor: 'pink',
  },
});

const Display = rnStyle.Text({
  fontSize: 56,
  fontWeight: 'bold',
  marginBottom: 32,
});

const Button = rnStyle(
  /** @param {TouchableOpacityProps} props */
  (props) => (
    <StyleTouchableOpacity {...props}>
      <StyleText color="white" fontSize={20}>
        {props.children}
      </StyleText>
    </StyleTouchableOpacity>
  ),
  {excludeFowardedProps: ['counter', 'bgColor'], propsAreStyleOverrides: false}, // excludes props not to be forwarded to the passed in component
)(
  styles.buttonHeight,
  // styles overrides styles above
  {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 4,
    margin: 8,
    backgroundColor: 'yellow',
  },
  // function styles overrides object styles in any order and function styles above
  ({counter, bgColor = 'blue'}, ctx) => ({
    // ctx.theme can be used here
    backgroundColor: counter % 2 ? 'grey' : bgColor,
  }),
);

export default function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <StyleProvider theme={{mode: 'light'}}>
      <StyleView flex={1} justifyContent="center" alignItems="center">
        <StatusBar style="auto" />
        <StyleText
          marginBottom={32}
          fontSize={25}
          fontWeight="bold"
          color="grey">
          Hello react-native-style!
        </StyleText>
        <Display>{counter}</Display>
        <StyleView flexDirection="row">
          <Button
            onPress={() => setCounter((p) => --p)}
            // backgroundColor="red"
            bgColor="red"
            counter={counter}>
            Decrement
          </Button>
          <Button
            onPress={() => setCounter((p) => ++p)}
            backgroundColor="pink"
            bgColor="green"
            counter={counter}>
            Increment
          </Button>
        </StyleView>
      </StyleView>
    </StyleProvider>
  );
}
