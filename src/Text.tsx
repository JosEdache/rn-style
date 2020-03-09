import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import {makeStyle} from './hooks';
import {Colors, Typography, shadow} from './theme';

export interface TextProps extends TextStyle, RNTextProps {
  children?: React.ReactNode;
  backgroundColor?: keyof Colors;
  category?: keyof Omit<
    Typography,
    | 'fontFamily'
    | 'fontSize'
    | 'fontWeightLight'
    | 'fontWeightRegular'
    | 'fontWeightMedium'
    | 'fontWeightBold'
  >;
  color?: keyof Colors;
  disabled?: boolean;
  style?: TextStyle;
}

export function Text(props: TextProps) {
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
    // testID,

    fontVariant,
    writingDirection,

    textAlignVertical,
    includeFontPadding,

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

    alignContent,
    alignItems,
    alignSelf,
    aspectRatio,
    borderBottomWidth,
    borderEndWidth,
    borderLeftWidth,
    borderRightWidth,
    borderStartWidth,
    borderTopWidth,
    borderWidth,
    bottom,
    display,
    end,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    height,
    justifyContent,
    left,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginStart,
    marginTop,
    marginVertical,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    overflow,
    padding,
    paddingBottom,
    paddingEnd,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingTop,
    paddingVertical,
    position,
    right,
    start,
    top,
    width,
    zIndex,
    direction,

    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,

    transform,
    transformMatrix,
    rotation,
    scaleX,
    scaleY,
    translateX,
    translateY,

    category,
    disabled,
    style,
    ...others
  } = props;
  const styles = useStyle({
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
    // testID,

    fontVariant,
    writingDirection,

    textAlignVertical,
    includeFontPadding,

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

    alignContent,
    alignItems,
    alignSelf,
    aspectRatio,
    borderBottomWidth,
    borderEndWidth,
    borderLeftWidth,
    borderRightWidth,
    borderStartWidth,
    borderTopWidth,
    borderWidth,
    bottom,
    display,
    end,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    height,
    justifyContent,
    left,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginStart,
    marginTop,
    marginVertical,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    overflow,
    padding,
    paddingBottom,
    paddingEnd,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingTop,
    paddingVertical,
    position,
    right,
    start,
    top,
    width,
    zIndex,
    direction,

    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,

    transform,
    transformMatrix,
    rotation,
    scaleX,
    scaleY,
    translateX,
    translateY,
    category,
    disabled,
  } as TextProps);
  return <RNText {...others} style={[styles.text, style]} />;
}

Text.defaultProps = {
  category: 'body2',
  color: 'black',
  disabled: false,
};

export default Text;

const useStyle = makeStyle(
  (
    theme,
    {
      backgroundColor,
      color,
      fontFamily,
      fontSize,
      fontWeight,
      textTransform,
      textAlign,
      letterSpacing,
      category,
      elevation,
      disabled,
      ...others
    }: TextProps,
  ) => ({
    text: {
      backgroundColor: theme.colors[backgroundColor!] || backgroundColor,
      ...(theme.typography[category!] as any),
      fontFamily: fontFamily || theme.typography[category!].fontFamily,
      fontSize: fontSize || theme.typography[category!].fontSize,
      fontWeight: fontWeight || theme.typography[category!].fontWeight,
      textTransform: textTransform || theme.typography[category!].textTransform,
      letterSpacing: letterSpacing || theme.typography[category!].letterSpacing,
      textAlign: textAlign,
      color:
        theme.colors[
          disabled
            ? theme.mode === 'LIGHT'
              ? 'textOnLightDisabled'
              : 'textOnDarkDisabled'
            : color!
        ] || color,
      ...shadow(elevation),
      ...others,
    },
  }),
);
