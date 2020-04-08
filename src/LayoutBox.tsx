import React from 'react';
import {View, ViewStyle, ViewProps, Animated, StyleSheet} from 'react-native';
import {makeStyle} from './hooks';
import {Colors, shadow} from './theme';
import {SurfaceOverlay, SurfaceOverlayProps} from './SurfaceOverlay';

export interface LayoutBoxProps extends ViewStyle, ViewProps {
  children?: React.ReactNode;
  backgroundColor?: keyof Colors;
  borderColor?: keyof Colors;
  removeOverlay?: boolean;
  overlayBrand?: SurfaceOverlayProps['brand'];
  disabled?: boolean;
  disabledStyle?: ViewStyle;
  animated?: boolean;
}

export function LayoutBox(props: LayoutBoxProps) {
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
    // testID,
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
    overlayBrand,
    removeOverlay,
    disabled,
    children,
    disabledStyle,
    animated,
    style,
    ...others
  } = props;
  const styles = useStyle({
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

    disabled,
    animated,
  });
  const Container = animated ? Animated.View : View;
  return (
    <Container
      {...others}
      style={[styles.container, style, disabled && disabledStyle]}>
      {!removeOverlay ? (
        <SurfaceOverlay
          disabled={disabled}
          brand={overlayBrand}
          overlay={elevation}
        />
      ) : null}
      {children}
    </Container>
  );
}

LayoutBox.defaultProps = {
  removeOverlay: false,
  animated: false,
  elevation: 0,
};

export default LayoutBox;

const useStyle = makeStyle(
  (
    theme,
    {backgroundColor, borderColor, elevation, disabled, animated, ...others},
  ) => ({
    container: {
      ...others,
      ...(animated ? {} : shadow(elevation)),
      backgroundColor:
        theme.colors[backgroundColor as keyof Colors] || backgroundColor,
      borderColor: theme.colors[borderColor as keyof Colors] || borderColor,
      ...(disabled && theme.mode === 'LIGHT' && !animated
        ? theme.disabledStyle()
        : {}),
    },
  }),
);
