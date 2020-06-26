# rn-style

A react native library for styling View and Text components using props or hook function instead of StyleSheet.create function directly

## Features

- Create styles with props passed from your custom components
- PlatformTouch component for creating custom buttons and touchable components

## Getting Started

### Installation

#### yarn

`yarn add @josedache/rn-style`

#### npm

`npm install --save @josedache/rn-style`

### Usage

```javascript
import React from 'react';
import {StyleView, StyleText} from '@josedache/rn-style';

function App() {
  return (
    <StyleView width={200} height={300}>
      // accepts ViewProps and ViewStyle as props
      <StyleText color="primary">Hello rn-style!</StyleText> // accepts TextProps
      and TextStyle as props
    </StyleView>
  );
}

export default App;
```

#### Using PlatformTouch component

Accepts StyleView props and TouchableNativeFeedbackProps (android) or TouchableOpacityProps (ios)

> **Note** pass outerDirection='row' which sets the outer StyleView flexDirection to row to help the inner StyleView align well when the parent of the PlatformTouch component has flexDirection row and vise versa

```javascript
import React from 'react';
import {PlatformTouch, StyleText} from '@josedache/rn-style';

export default function Button({text}) {
  return (
    <PlatformTouch
      borderRadius={20}
      outerDirection="row"
      alignItems="center"
      justifyContent="center"
      backgroundColor="secondary"
      onPress={() => console.log('Press')}>
      <StyleText>{text}</StyleText>
    </PlatformTouch>
  );
}
```

#### Creating style with makeStyle function

```javascript
import React from 'react';
import {View, Text} from 'react-native';
import {makeStyle} from '@josedache/rn-style';

export default function App() {
    const styles = useStyle({direction: 'row'})

  return (
      <View style={styles.root}>
        <Text style={styles.text}>Hello rn-style!</Text>
      </View>
  );
}

// returns hook that accepts props to be used in this style
const useStyle = makeStyle((props) => ({
    root: {
        backgroundColor: 'pink'
        flexDirection: props.direction
    },
    text: {
        color: 'purple'
    }
}))
```

#### Creating elevation using shadow function or StyleView elevation prop

> Works for both ios and android

```javascript
import React from 'react';
import {View, Text} from 'react-native';
import {shadow, StyleView} from '@josedache/rn-style';

export default function Card() {
    return (
        <View style={{...shadow(2 /** default to 0 */)}}>
            <Text>Hello rn-style!</Text>
        </View>


        <StyleView elevation={2} backgroundColor='secondary'>
            <Text>Hello rn-style!</Text>
        </StyleView>
    )
}
```

## API

### Types

- [ViewStyle](https://reactnative.dev/docs/view-style-props)
- [TextStyle](https://reactnative.dev/docs/text-style-props)
- [ViewProps](https://reactnative.dev/docs/view#props)
- [TextProps](https://reactnative.dev/docs/text#props)
- [TextInputProps](https://reactnative.dev/docs/textinput#props)

> **Note** elevation prop can be used to pass elevation or shadow for both android and ios. but ios can be customized using the neccessary style props.

### StyleProvider

Context Provider for setting default values for some component

#### value props

```javascript
{
  // sets the default fontFamily for both StyleText and StyleTextInput component
  fontFamily: string; 
}
```

### StyleView

Accepts all ViewStyle properties and ViewProps as props

#### additional

```javascript
{
    animated: boolean, // indicate if the root component should be Animated.View. default to false
}
```

### StyleText

Accepts all TextStyle properties and TextProps as props

#### additional

```javascript
{
}
```

### StyleTextInput

Accepts all TextStyle properties and TextInputProps as props

#### additional

```javascript
{
}
```

### PlatformTouch

Accepts [StyleView](#StyleView) props and TouchableNativeFeedbackProps (android) or TouchableOpacityProps (ios) as props

#### additional

```javascript
{
    outerDirection: ViewStyle['flex-direction'], //  Sets the outer StyleView flexDirection to row. default to 'column',
    outerStyle: ViewStyle, // style to be used for the outer StyleView
    innerStyle: ViewStyle, // style to be used for the inner StyleView
}
```

### makeStyle Function

Creates configurable styles using passed props and theme from it's returned callback

#### params

##### option - (props) => styleObject

```js
const useStyle = makeStyle((props) => ({
    root: {
        backgroundColor: theme.colors.primary
        flexDirection: props.direction
    },
    text: {
        color: theme.colors.textOnPrimary
    }
}))

```

### shadow Function

A function that creates elevation for both ios and android

> Note elevation option param can be passed Animated.Value for Animated.View Component

#### params

##### option - (elevation) => ios or android shadow

```js
```

## Authors

- **Edache Joseph** - @josedache

## Acknowledgments

## License

MIT
