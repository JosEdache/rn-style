import {TextStyle} from 'react-native';
import splitViewStyleProps from './splitViewStyleProps';

export function splitTextStyleProps<P extends TextStyle>(props: P) {
  const [viewStyle, others] = splitViewStyleProps(props);
  const {
    color,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    letterSpacing,
    lineHeight,
    textAlign,
    textDecorationLine,
    textDecorationStyle,
    textDecorationColor,
    textShadowColor,
    textShadowOffset,
    textShadowRadius,
    textTransform,
    testID,

    fontVariant,
    writingDirection,

    textAlignVertical,
    includeFontPadding,
    ...textProps
  } = others;

  return [
    {
      ...viewStyle,
      color,
      fontFamily,
      fontSize,
      fontStyle,
      fontWeight,
      letterSpacing,
      lineHeight,
      textAlign,
      textDecorationLine,
      textDecorationStyle,
      textDecorationColor,
      textShadowColor,
      textShadowOffset,
      textShadowRadius,
      textTransform,
      testID,

      fontVariant,
      writingDirection,

      textAlignVertical,
      includeFontPadding,
    },
    {testID, ...textProps},
  ] as const;
}

export default splitTextStyleProps;
