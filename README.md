# rn-style

A react native library for styling View and Text components using props and custom theme instead of StyleSheet.create function directly

## Features

- Creating custom theme that can be used across components
- Create styles with custom theme and props passed from your custom components
- Use certain theme properties as value's on LayoutBox and Text component props
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
import {createTheme, ThemeProvider, LayoutBox, Text} from '@josedache/rn-style';

const theme = createTheme({
  mode: 'DARK', // or pass LIGHT (default) for light theme
  // ... pass other theme configs
});

function App() {
  return (
    <ThemeProvider theme={theme}> // Defaults to light theme
      <LayoutBox width={200} height={300}> // accepts ViewProps and ViewStyle as props
        <Text color='primary'>Hello rn-style!</Text> // accepts TextProps and TextStyle as props
      </LayoutBox>
    </ThemeProvider>
  );
}

export default App;
```

#### Using PlatformTouch component
Accepts LayoutBox props and TouchableNativeFeedbackProps (android) or TouchableOpacityProps (ios)

> **Note** pass outerDirection='row' which sets the outer LayoutBox flexDirection to row to help the inner LayoutBox align well when the parent of the PlatformTouch component has flexDirection row and vise versa

```javascript
import React from 'react';
import {PlatformTouch, Text} from '@josedache/rn-style';

export default function Button({text}) {
  return (
   <PlatformTouch  
        borderRadius={20} 
        outerDirection="row"
        alignItems="center"
        justifyContent="center"
        backgroundColor="secondary"
        onPress={() => console.log('Press')}>
    <Text>{text}</Text>
   </PlatformTouch>
  );
}
```

#### Creating style with makeStyle function

```javascript
import React from 'react';
import {View, Text} from 'react-native';
import {makeStyle, createTheme, ThemeProvider} from '@josedache/rn-style';

const theme = createTheme({
  mode: 'DARK', // or pass LIGHT (default) for light theme
  // ... pass other theme configs
});

export default function App() {
    const styles = useStyle({direction: 'row'}, /** {hello: 'hello'} custom theme to merge*/)

  return (
    <ThemeProvider theme={theme}> // Defaults to light theme
      <View style={styles.root}>
        <Text style={styles.text}>Hello rn-style!</Text>
      </View>
    </ThemeProvider>
  );
}

// returns hook that accepts props and custom theme to be used in this style
// also accepts object of the style directly
const useStyle = makeStyle((theme, props) => ({
    root: {
        backgroundColor: theme.colors.primary
        flexDirection: props.direction
    },
    text: {
        color: theme.colors.textOnPrimary
    }
})) 
```

#### Creating elevation using shadow function or LayoutBox elevation prop

> Works for both ios and android

```javascript
import React from 'react';
import {View, Text} from 'react-native';
import {shadow, LayoutBox} from '@josedache/rn-style';

export default function Card() { 
    return (
        <View style={{...shadow(2 /** default to 0 */)}}>
            <Text>Hello rn-style!</Text>
        </View>


        <LayoutBox elevation={2} backgroundColor='secondary'>
            <Text>Hello rn-style!</Text>
        </LayoutBox>
    )
}
```

## API

### Types
- [Colors](src/theme/colors.ts#L3)
- [Typography](./src/theme/typography.ts#L29)
- [ScaleCategory](./src/theme/typography.ts#L15)
- [Theme](./src/theme/index.ts#L19)
- [ViewStyleProps](https://reactnative.dev/docs/view-style-props)
- [TextStyleProps](https://reactnative.dev/docs/text-style-props)
- [ViewProps](https://reactnative.dev/docs/view#props)
- [TextProps](https://reactnative.dev/docs/text#props)


> **Note** style properties that accepts color string as value like backgroundColor and color can be passed key of type Color **example** ` <Text color='primary'>Hello<Text> `

### LayoutBox
Accepts all ViewStyleProps and ViewProps as props

#### additional
```javascript
{
    disabled: boolean, // if the LayoutBox should be disabled. default to false
    disabledStyle: ViewStyleProps, // pass style when disabled is true. default to undefined
    animated: boolean, // indicate if the root component should be Animated.View. default to false
}
```

### Text
Accepts all TextStyle and TextProps as props

#### additional
```javascript
{
    disabled: boolean, // if the Text should be disabled. default to false
    category: ScaleCategory, // the variant of text type to be used. default to 'body2'
}
```


### PlatformTouch
Accepts [LayoutBox](#LayoutBox) props and TouchableNativeFeedbackProps (android) or TouchableOpacityProps (ios)

#### additional
```javascript
{
    outerDirection: ViewStyleProps['flex-direction'], //  Sets the outer LayoutBox flexDirection to row. default to 'column',
    outerStyle: ViewStyleProps, // style to be used for the outer LayoutBox
    innerStyle: ViewStyleProps, // style to be used for the inner LayoutBox
}
```

### ThemeProvider
rn-style context provider

#### props
```javascript
{
    theme: object, // the return value of createTheme function
    mode: 'LIGHT' | 'DARK', // the mode to be used for the passed theme. optional
}
```

### createTheme Function
Accept option used to configure the app theme

#### default values
- [DEFAULT_LIGHT_COLORS](./src/theme/colors.ts#L94)
- [DEFAULT_DARK_COLORS](./src/theme/colors.ts#L111)
- [DEFAULT_TYPOGRAPHY](./src/theme/typography.ts#L54)

#### params
##### option

```js
{
     // The mode of the theme
    mode: 'LIGHT' | 'DARK', // default 'LIGHT'

    // Used when the mode is LIGHT.
    lightColors: Colors, // default DEFAULT_LIGHT_COLORS

    // Used when the mode is DARK.
    darkColors: Colors, // default DEFAULT_DARK_COLORS
    
    typography: Typography, // default DEFAULT_TYPOGRAPHY
}
```
#### return
Returns theme object to be passed to ThemeProvider

### makeStyle Function
Creates configurable styles using passed props and theme from it's returned callback

#### params
##### option - function | object

```js
// function
const useStyle = makeStyle((theme, props) => ({
    root: {
        backgroundColor: theme.colors.primary
        flexDirection: props.direction
    },
    text: {
        color: theme.colors.textOnPrimary
    }
}))


// object
const useStyle = makeStyle({
    root: {
        backgroundColor: 'yellow'
        flexDirection: 'row'
    },
    text: {
        color: 'blue'
    }
})
```

### useTheme Function
Use the current theme of the context and pass optional object to be merged with context theme

#### params

##### theme - object
##### example
```js
import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@josedache/rn-style';

export default function Card() { 
    const theme = useTheme({cardHeight: 200'})
    return (
        <View style={{backgroundColor: theme.colors.primary, height: theme.cardHeight}}>
            <Text>Hello rn-style!</Text>
        </View>
    )
}
```

#### return Theme
```js
{
    mode: ThemeMode,
    colors: Colors,
    typography: Typography,
    shadow: Function,
    spacing: Function,
    disabledStyle: Function,
}
```


## Support

## Roadmap

## Contributing

## Versioning

## Authors

- **Edache Joseph** - @josedache

## Acknowledgments

## License

## Project status
