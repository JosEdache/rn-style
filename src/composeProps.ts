import {StyleSheet} from 'react-native';

export function composeProps<P = {}, S = {}>(
  props = {} as P,
  styleKey = 'style' as keyof P,
  ...styles: any[]
): P {
  return {
    ...props,
    [styleKey]: StyleSheet.flatten([...styles, props[styleKey]]),
  };
}

export default composeProps;
