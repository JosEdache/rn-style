import {StyleSheet} from 'react-native';

type NamedStyles<T> = StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>;
type StyleCallback<S, P> = (props?: P) => S;

export function makeStyle<S extends NamedStyles<S>, P = any>(
  callback: StyleCallback<S, P>,
) {
  return callback;
}
