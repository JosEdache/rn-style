import {StyleSheet} from 'react-native';

/**
 * @param styles
 * @param props
 * @param styleKey
 */
export function composeProps(
  styles: any = {},
  props: {[x: string]: any} = {},
  styleKey = 'style',
) {
  return {...props, [styleKey]: StyleSheet.flatten([styles, props[styleKey]])};
}

export default composeProps;
