import {StyleSheet} from 'react-native';

export function composeStyles(...styles: any[]): readonly [any[], any[]] {
  const registeredStyles = [];
  const functionStyles = [];
  for (const style of styles) {
    switch (typeof style) {
      case 'number':
        registeredStyles.push(style);
        break;
      case 'function':
        functionStyles.push(style);
        break;
      case 'object':
        if (Array.isArray(style)) {
          const [nestedRegisteredStyles, nestedFunctionStyles] = composeStyles(
            style,
          );
          registeredStyles.push(...nestedRegisteredStyles);
          functionStyles.push(...nestedFunctionStyles);
        } else if (Object.keys(style).length > 0) {
          registeredStyles.push(StyleSheet.create({style}).style);
        }
        break;
      default:
        break;
    }
  }
  return [registeredStyles, functionStyles] as const;
}

export default composeStyles;
