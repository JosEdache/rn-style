import {
  viewStyleProps,
  imageStyleProps,
  textStyleProps,
  layoutStyleProps,
  shadowStylePropsIOS,
  transformStyleProps,
} from './styleProps';

export function isShadowStylePropIOS(key: string) {
  return shadowStylePropsIOS.includes(key);
}

export function isTransformStyleProp(key: string) {
  return transformStyleProps.includes(key);
}

export function isLayoutStyleProp(key: string) {
  return layoutStyleProps.includes(key);
}

export function isViewStyleProp(key: string) {
  return viewStyleProps.includes(key);
}

export function isTextStyleProp(key: string) {
  return textStyleProps.includes(key);
}

export function isImageStyleProp(key: string) {
  return imageStyleProps.includes(key);
}

export function isStyleProp(key: string) {
  if (
    isLayoutStyleProp(key) ||
    isShadowStylePropIOS(key) ||
    isTransformStyleProp(key) ||
    isViewStyleProp(key) ||
    isTextStyleProp(key) ||
    isImageStyleProp(key)
  ) {
    return true;
  }
  return false;
}

export default isStyleProp;
