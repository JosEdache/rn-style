import {StatusBar} from 'expo-status-bar';
import React from 'react';
import rnStyle, {
  StyleView,
  StyleTouchableOpacity,
  StyleText,
} from '@josedache/rn-style';
import {TouchableOpacityProps} from 'react-native';

const Display = rnStyle.Text({
  fontSize: 56,
  fontWeight: 'bold',
  marginBottom: 32,
});

const Button = rnStyle.withViewStyle(
  /** @param {TouchableOpacityProps} props */
  (props) => (
    <StyleTouchableOpacity {...props}>
      <StyleText color="white" fontSize={20}>
        {props.children}
      </StyleText>
    </StyleTouchableOpacity>
  ),
)({
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  borderRadius: 4,
  backgroundColor: 'blue',
  minHeight: 35,
  minWidth: 56,
  margin: 8,
});

export default function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <StyleView flex={1} justifyContent="center" alignItems="center">
      <StatusBar style="auto" />
      <Display>{counter}</Display>
      <StyleView flexDirection="row">
        <Button onPress={() => setCounter((p) => --p)} backgroundColor="red">
          Decrement
        </Button>
        <Button onPress={() => setCounter((p) => ++p)} backgroundColor="green">
          Increment
        </Button>
      </StyleView>
    </StyleView>
  );
}
