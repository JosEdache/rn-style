import {ViewStyle} from 'react-native';
import splitLayoutStyleProps from './splitLayoutStyleProps';
import splitShadowStyleIOSProps from './splitShadowStyleProps';
import splitTransformsStyleProps from './splitTransformStyleProps';

export function splitViewStyleProps<P extends ViewStyle>(props: P) {
  const [layoutStyle, othersLayout] = splitLayoutStyleProps(props);
  const [transformStyle, othersTransform] = splitTransformsStyleProps(
    othersLayout,
  );
  const [shadowStyle, othersShadow] = splitShadowStyleIOSProps(othersTransform);
  const {
    backfaceVisibility,
    backgroundColor,
    borderBottomColor,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
    borderColor,
    borderEndColor,
    borderLeftColor,
    borderRadius,
    borderRightColor,
    borderStartColor,
    borderStyle,
    borderTopColor,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStartRadius,
    opacity,
    elevation,

    testID,
    ...others
  } = othersShadow;
  return [
    {
      ...layoutStyle,
      ...transformStyle,
      ...shadowStyle,
      backfaceVisibility,
      backgroundColor,
      borderBottomColor,
      borderBottomEndRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderBottomStartRadius,
      borderColor,
      borderEndColor,
      borderLeftColor,
      borderRadius,
      borderRightColor,
      borderStartColor,
      borderStyle,
      borderTopColor,
      borderTopEndRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderTopStartRadius,
      opacity,
      // testID,
      elevation,

      testID,
    },
    {testID, ...others},
  ] as const;
}

export default splitViewStyleProps;
