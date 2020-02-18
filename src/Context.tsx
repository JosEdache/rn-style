import React, {createContext} from 'react';
import {DEFAULT_THEME} from './theme';

export type Props = {
  children: React.ReactNode;
} & typeof RNStyleThemeProvider.defaultProps;

const RNStyleThemeContext = createContext(DEFAULT_THEME);
RNStyleThemeContext.displayName = 'DefaultThemeContext';

const {
  Provider: ThemeContextProvider,
  Consumer: ThemeContextConsumer,
} = RNStyleThemeContext;

export const RNStyleThemeConsumer = ThemeContextConsumer;

export function RNStyleThemeProvider(props: Props) {
  return (
    <ThemeContextProvider value={{...DEFAULT_THEME, ...props.theme}}>
      {props.children}
    </ThemeContextProvider>
  );
}

RNStyleThemeProvider.defaultProps = {
  theme: DEFAULT_THEME,
};

export default RNStyleThemeContext;
