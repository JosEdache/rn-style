import {TransformsStyle} from 'react-native';

export function splitTransformsStyleProps<P extends TransformsStyle>(props: P) {
  const {
    transform,
    transformMatrix,
    rotation,
    scaleX,
    scaleY,
    translateX,
    translateY,
    ...others
  } = props;
  return [
    {
      transform,
      transformMatrix,
      rotation,
      scaleX,
      scaleY,
      translateX,
      translateY,
    },
    others,
  ] as const;
}

export default splitTransformsStyleProps;
