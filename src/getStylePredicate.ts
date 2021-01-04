import {
  isImageStyleProp,
  isLayoutStyleProp,
  isShadowStylePropIOS,
  isStyleProp,
  isTextStyleProp,
  isTransformStyleProp,
  isViewStyleProp,
} from './isStyleProp';
import type {StyleMap} from './types';

export function getStylePredicate(key: keyof StyleMap = 'AllStyle') {
  switch (key) {
    case 'ImageStyle':
      return isImageStyleProp;
    case 'FlexStyle':
    case 'LayoutStyle':
      return isLayoutStyleProp;
    case 'ShadowStyleIOS':
      return isShadowStylePropIOS;
    case 'TextStyle':
      return isTextStyleProp;
    case 'TransformsStyle':
      return isTransformStyleProp;
    case 'ViewStyle':
      return isViewStyleProp;
    case 'AllStyle':
    default:
      return isStyleProp;
  }
}

export default getStylePredicate;
