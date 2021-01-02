import {StyleSheet} from 'react-native';

export function composeProps<P = {}, S = {}>(
  props = {} as P,
  style = {} as S,
  styleKey = 'style' as keyof P,
): P {
  return {...props, [styleKey]: StyleSheet.flatten([style, props[styleKey]])};
}

export default composeProps;
