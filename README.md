# react-native-style

A styling solution for react native components.

## Features

- Pass styles as props on components
- Generate style dynamically based on component props.
- Exposed built-in react native component factories
- Exposed built-in react native components prefix with `Style`. eg `StyleView, StyleText, etc`.
- Choose how styles are overridden

## Getting Started

### Installation

#### yarn

`yarn add @josedache/react-native-style`

#### npm

`npm install --save @josedache/react-native-style`

### Usage

```javascript
import React from 'react';
import {StyleView, StyleText} from '@josedache/react-native-style';

function App() {
  return (
    <StyleView width={200} height={300} backgroundColor="green">
      <StyleText color="white">Hello react-native-style!</StyleText>
    </StyleView>
  );
}

export default App;
```

#### Creating elevation using shadow function

> Works for both ios and android

```javascript
import React from 'react';
import {View, Text} from 'react-native';
import {shadow, StyleView} from '@josedache/react-native-style';

export default function Card() {
    return (
        <View style={{...shadow(2 /** default to 0 */)}}>
            <Text>Hello react-native-style!</Text>
        </View>

        <StyleView {...shadow(2)} backgroundColor='secondary'>
            <Text>Hello react-native-style!</Text>
        </StyleView>
    )
}
```

#### Counter Example

```js
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
```

## API

### styleFactory

`styleFactory` or `rnStyle` function is the default export. it is used to create component that accepts styles as props including your passed component props. The style props are composed then passed to your component based on the `stylePropsKey` option which default to style.

#### params

##### Component

The component to compose style for

##### options

An object to configure how styles are composed

```javascript
{
    displayName: string; // the display name to use. default to styleComponent(Component.displayName)
    propsAreStyleOverrides: boolean; // set to false if you want styles specified during creation to override styles passed on style component. default to true
    stylePropKey: string; // your component prop to pass the composed styles. default to 'style' prop
    styleType: string; // the style type to use for spliting styles from props. default to AllStyles
    forwardRef: boolean; // if ref should be forwarded to your passed component
    excludeFowardedProps: string[]; // use to exclude props not to be forwarded to your component or extra props passed to `StyleComponent`.
}
```

##### returns

The `styleFactory` returns `StyleComponentFactory` used to pass initial or default styles for your component.

### StyleComponentFactory

A function that accepts styles and returns the `StyleComponent` that accept styles as props.

#### params

##### styles

It is used as default styles or style overriddes if `propsAreStyleOverrides` is false. Accept vargs params of styles of object, object array, function and registered styles (styles created using StyleSheet.create)

> **Note**
>
> styles on the right overrides styles on the left, but function styles overrides non function styles in any order or position.
>
> function styles receives component props as first argument and context as second.

##### returns

`StyleComponent` that accept styles as props, including your component props.

### StyleProvider

Context Provider for setting default styles for native style components. it also accepts arbitrary number of properties, that can be accessed from function styles on `StyleComponentFactory`

#### props

```javascript
  type Style = Function | object | object[] // alse registered styles

{
    [x: string]: any;
    viewStyle: Style;
    textStyle: Style;
    textInputStyle: Style;
    imageStyle: Style;
    imageBackgroundStyle: Style;
    scrollViewStyle: Style;
    flatListStyle: Style;
    sectionListStyle: Style;
    virtualizedListStyle: Style;
    touchableHighlightStyle: Style;
    touchableOpacityStyle: Style;
    touchableNativeFeedbackStyle: Style;
    touchableWithoutFeedbackStyle: Style;
}
```

### useStyleContext

Use to access style context from your components

### nativeStyleComponentFactories

They all accept styles as argument similar to `StyleComponentFactory`. They are accessed from the default export.

- View - Accepts ViewStyles
- Text - Accepts TextStyles
- TextInput - Accepts TextStyles
- Image - Accepts ImageStyles
- ImageBackground - Accepts ViewStyles
- ScrollView - Accepts ViewStyles
- FlatList - Accepts ViewStyles
- SectionList - Accepts ViewStyles
- VirtualizedList - Accepts ViewStyles
- TouchableHighlight - Accepts ViewStyles
- TouchableNativeFeedback - Accepts ViewStyles
- TouchableOpacity - Accepts ViewStyles
- TouchableWithoutFeedback - Accepts ViewStyles

### nativeStyleComponents

All native nativeStyleComponentFactories prefixed with `Style` eg. `StyleView`

### shadow

A function that accepts a number creates elevation for both ios and android

> Note elevation param can be passed Animated.Value for Animated.View Component

## Authors

- **Edache Joseph Edache** - @josedache

## Acknowledgments

## License

MIT
