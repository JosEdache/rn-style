import React, {createContext, memo} from 'react';
import {DEFAULT_THEME, configureTheme} from './theme';
import {ThemeMode} from './types';

export type ThemeProviderProps = {
  children?: React.ReactNode;
  mode?: ThemeMode;
} & typeof TP.defaultProps;

export const ThemeContext = createContext(configureTheme(DEFAULT_THEME));
ThemeContext.displayName = 'DefaultThemeContext';

const {Provider, Consumer} = ThemeContext;

export const ThemeConsumer = Consumer;

function TP(props: ThemeProviderProps) {
  const {mode, theme} = props;
  const THEME = configureTheme({...theme, mode: mode || theme.mode});
  return <Provider value={THEME}>{props.children}</Provider>;
}

TP.defaultProps = {
  theme: DEFAULT_THEME,
};

export const ThemeProvider = memo(TP);

export default ThemeContext;
