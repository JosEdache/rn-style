import React from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {LayoutBox, LayoutBoxProps} from './LayoutBox';

export type Overload = {
  (props: TouchableNativeFeedbackProps): JSX.Element;
  (props: TouchableOpacityProps): JSX.Element;
};

export interface PlatformTouchProps
  extends LayoutBoxProps,
    TouchableNativeFeedbackProps,
    TouchableOpacityProps {
  outerStyle?: ViewStyle;
  innerStyle?: ViewStyle;
  outerDirection?: ViewStyle['flexDirection'];
}

const Touch: Overload = (
  props: TouchableNativeFeedbackProps | TouchableOpacityProps,
) => {
  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback {...props} />;
  }
  return <TouchableOpacity {...props} />;
};

export function PlatformTouch(props: PlatformTouchProps) {
  const {
    delayLongPress,
    delayPressIn,
    delayPressOut,
    disabled,
    hitSlop,
    onBlur,
    onFocus,
    onLayout,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
    style,
    pressRetentionOffset,
    testID,

    hasTVPreferredFocus,
    tvParallaxProperties,

    background,
    useForeground,

    activeOpacity,

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
    end,
    flex,
    flexBasis,
    flexGrow,
    flexShrink,
    height,

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

    children,
    outerStyle,
    innerStyle,
    outerDirection,
    ...others
  } = props;

  return (
    <LayoutBox
      style={outerStyle}
      overflow={overflow || 'hidden'}
      flexDirection={outerDirection}
      // alignItems="stretch"
      {...{
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
        end,
        flex,
        flexBasis,
        flexGrow,
        flexShrink,
        height,

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
      }}>
      <Touch
        {...{
          delayLongPress,
          delayPressIn,
          delayPressOut,
          disabled,
          hitSlop,
          onBlur,
          onFocus,
          onLayout,
          onLongPress,
          onPress,
          onPressIn,
          onPressOut,
          pressRetentionOffset,
          style: style,
          testID,

          hasTVPreferredFocus,
          tvParallaxProperties,

          background,
          useForeground,

          activeOpacity,
        }}>
        <LayoutBox
          {...{maxHeight, maxWidth, minHeight, minWidth, width, height, flex}}
          {...others}
          style={innerStyle}>
          {children}
        </LayoutBox>
      </Touch>
    </LayoutBox>
  );
}

PlatformTouch.defaultProps = {
  outerDirection: 'column',
};

export default PlatformTouch;
