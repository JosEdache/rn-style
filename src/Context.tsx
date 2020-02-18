import React, {createContext} from 'react';
import {DEFAULT_THEME} from './theme';

export type Props = {
  children: React.ReactNode;
} & typeof ThemeProvider.defaultProps;

const RNStyleThemeContext = createContext(DEFAULT_THEME);
RNStyleThemeContext.displayName = 'DefaultThemeContext';

const {Provider, Consumer} = RNStyleThemeContext;

export const ThemeConsumer = Consumer;

export function ThemeProvider(props: Props) {
  return (
    <Provider value={{...DEFAULT_THEME, ...props.theme}}>
      {props.children}
    </Provider>
  );
}

ThemeProvider.defaultProps = {
  theme: DEFAULT_THEME,
};

export default RNStyleThemeContext;
