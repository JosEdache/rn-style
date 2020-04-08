import {useMemo, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {MergeRecursiveTheme} from './theme';
import ThemeContext from './Context';
import {PartialRecursive} from './types';

type NamedStyles<T> = StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>;
type StyleCallback<N, P, T> =
  | ((theme: T, props: P) => N | StyleSheet.NamedStyles<N>)
  | N
  | StyleSheet.NamedStyles<N>;
type UseStyles<N, P, T> = (props?: P, theme?: PartialRecursive<T>) => N;

export function useTheme<T extends MergeRecursiveTheme<T>>(
  theme?: PartialRecursive<T>,
): T {
  const contextTheme = useContext(ThemeContext);
  const currentTheme = useMemo(() => ({...contextTheme, ...theme}), [
    contextTheme,
    theme,
  ]);
  return currentTheme as T;
}

export function makeStyle<
  N extends NamedStyles<N>,
  P extends any,
  T extends MergeRecursiveTheme<T>
>(styles: StyleCallback<N, P, T>): UseStyles<N, P, T> {
  return function(props, theme) {
    const currentTheme = useTheme(theme);
    return useMemo(
      () =>
        typeof styles === 'object' ? styles : styles(currentTheme, props!),
      [currentTheme, props],
    ) as N;
  };
}
