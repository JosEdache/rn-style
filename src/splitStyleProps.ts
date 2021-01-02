import {StyleIntersection} from './types';
import isStyleProp from './isStyleProp';

interface Split<P, S> {
  componentProps: Omit<P, keyof S>;
  styleProps: S;
}

export function splitStyleProps<P extends S, S = StyleIntersection>(
  props: P,
  isStylePropPredicate = isStyleProp,
) {
  type PK = keyof P;
  type SK = keyof S;
  type CK = keyof Omit<P, SK>;
  const {styleProps, componentProps} = Object.keys(props).reduce(
    (acc, prop) => {
      if (isStylePropPredicate(prop)) {
        acc.styleProps[prop as SK] = props[prop as PK] as any;
      } else {
        acc.componentProps[prop as CK] = props[prop as CK];
      }
      return acc;
    },
    {componentProps: {}, styleProps: {}} as Split<P, S>,
  );
  return [styleProps, componentProps] as const;
}

export default splitStyleProps;
