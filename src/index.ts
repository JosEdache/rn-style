import styleEnhancer from './styleEnhancer';
import nativeStyleEnhancers from './nativeStyleEnhancers';

Object.assign(styleEnhancer, nativeStyleEnhancers);

export * from './styleEnhancer';
export * from './shadow';
export * from './Context';
export * from './nativeStyleComponents';
export * from './composeInitialStyle';
export * from './composeProps';
export * from './getStylePredicate';
export * from './isStyleProp';
export * from './splitExcludedProps';
export * from './splitStyleProps';
export * from './styleProps';
export * from './types';
export default styleEnhancer as typeof styleEnhancer &
  typeof nativeStyleEnhancers;
