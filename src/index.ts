import styleEnhancer from './styleFactory';
import nativeStyleComponentFactories from './nativeStyleComponentFactories';

Object.assign(styleEnhancer, nativeStyleComponentFactories);

export * from './styleFactory';
export * from './shadow';
export * from './StyleContext';
export * from './nativeStyleComponents';
export * from './composeStyles';
export * from './composeProps';
export * from './getStylePredicate';
export * from './isStyleProp';
export * from './splitExcludedProps';
export * from './splitStyleProps';
export * from './styleProps';
export * from './types';
export default styleEnhancer as typeof styleEnhancer &
  typeof nativeStyleComponentFactories;
