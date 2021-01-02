import styleEnhancer from './styleEnhancer';
import nativeStyleEnhancers from './nativeStyleEnhancers';

Object.assign(styleEnhancer, nativeStyleEnhancers);

export * from './styleEnhancer';
export * from './shadow';
export * from './Context';
export * from './nativeStyleComponents';
export default styleEnhancer as typeof styleEnhancer &
  typeof nativeStyleEnhancers;
