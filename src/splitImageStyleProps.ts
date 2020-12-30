import {ImageStyle} from 'react-native';
import splitLayoutStyleProps from './splitLayoutStyleProps';
import splitShadowStyleIOSProps from './splitShadowStyleProps';
import splitTransformsStyleProps from './splitTransformStyleProps';

export function splitImageStyleProps<P extends ImageStyle>(props: P) {
  const [layoutStyle, othersLayout] = splitLayoutStyleProps(props);
  const [transformStyle, othersTransform] = splitTransformsStyleProps(
    othersLayout,
  );
  const [shadowStyle, othersShadow] = splitShadowStyleIOSProps(othersTransform);

  const {
    backfaceVisibility,
    backgroundColor,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderColor,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    opacity,
    overlayColor,
    resizeMode,
    tintColor,
    ...others
  } = othersShadow;

  return [
    {
      ...layoutStyle,
      ...transformStyle,
      ...shadowStyle,
      backfaceVisibility,
      backgroundColor,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderColor,
      borderRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      opacity,
      overlayColor,
      resizeMode,
      tintColor,
    },
    others,
  ] as const;
}

export default splitImageStyleProps;
