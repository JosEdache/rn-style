import React from 'react';
import {View, ViewStyle, ViewProps} from 'react-native';
import {makeStyle} from './styles';
import {Colors, shadow} from './theme';
import {SurfaceOverlay, SurfaceOverlayProps} from './SurfaceOverlay';

export interface LayoutBoxProps extends ViewStyle, ViewProps {
  children?: React.ReactNode;
  backgroundColor?: keyof Colors;
  overlay?: boolean;
  overlayBrand?: SurfaceOverlayProps['brand'];
  disabled?: boolean;
}

export function LayoutBox(props: LayoutBoxProps) {
  const {
    hitSlop,
    onLayout,
    pointerEvents,
    removeClippedSubviews,
    testID,
    nativeID,
    collapsable,
    needsOffscreenAlphaCompositing,
    renderToHardwareTextureAndroid,
    shouldRasterizeIOS,
    isTVSelectable,
    hasTVPreferredFocus,
    tvParallaxProperties,
    tvParallaxShiftDistanceX,
    tvParallaxShiftDistanceY,
    tvParallaxTiltAngle,
    tvParallaxMagnification,
    onStartShouldSetResponder,
    onMoveShouldSetResponder,
    onResponderEnd,
    onResponderGrant,
    onResponderReject,
    onResponderMove,
    onResponderRelease,
    onResponderStart,
    onResponderTerminationRequest,
    onResponderTerminate,
    onStartShouldSetResponderCapture,
    onMoveShouldSetResponderCapture,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onTouchEndCapture,
    accessible,
    accessibilityActions,
    accessibilityLabel,
    accessibilityRole,
    accessibilityStates,
    accessibilityState,
    accessibilityHint,
    onAccessibilityAction,
    accessibilityComponentType,
    accessibilityLiveRegion,
    importantForAccessibility,
    accessibilityElementsHidden,
    accessibilityTraits,
    accessibilityViewIsModal,
    onAccessibilityTap,
    onMagicTap,
    accessibilityIgnoresInvertColors,
    children,
    overlayBrand,
    style,
    ...others
  } = props;
  const styles = useStyle(others);
  return (
    <View
      {...{
        hitSlop,
        onLayout,
        pointerEvents,
        removeClippedSubviews,
        testID,
        nativeID,
        collapsable,
        needsOffscreenAlphaCompositing,
        renderToHardwareTextureAndroid,
        shouldRasterizeIOS,
        isTVSelectable,
        hasTVPreferredFocus,
        tvParallaxProperties,
        tvParallaxShiftDistanceX,
        tvParallaxShiftDistanceY,
        tvParallaxTiltAngle,
        tvParallaxMagnification,
        onStartShouldSetResponder,
        onMoveShouldSetResponder,
        onResponderEnd,
        onResponderGrant,
        onResponderReject,
        onResponderMove,
        onResponderRelease,
        onResponderStart,
        onResponderTerminationRequest,
        onResponderTerminate,
        onStartShouldSetResponderCapture,
        onMoveShouldSetResponderCapture,
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        onTouchCancel,
        onTouchEndCapture,
        accessible,
        accessibilityActions,
        accessibilityLabel,
        accessibilityRole,
        accessibilityStates,
        accessibilityState,
        accessibilityHint,
        onAccessibilityAction,
        accessibilityComponentType,
        accessibilityLiveRegion,
        importantForAccessibility,
        accessibilityElementsHidden,
        accessibilityTraits,
        accessibilityViewIsModal,
        onAccessibilityTap,
        onMagicTap,
        accessibilityIgnoresInvertColors,
      }}
      style={[styles.container, style]}>
      {others.overlay ? (
        <SurfaceOverlay
          disabled={others.disabled}
          brand={overlayBrand}
          overlay={others.elevation}
        />
      ) : null}
      {children}
    </View>
  );
}

LayoutBox.defaultProps = {
  backgroundColor: 'surface',
  overlay: true,
};

export default LayoutBox;

const useStyle = makeStyle(
  (theme, {backgroundColor, elevation, disabled, ...others}) => ({
    container: {
      ...others,
      ...shadow(elevation),
      backgroundColor:
        theme.colors[backgroundColor as keyof Colors] || backgroundColor,
      ...(disabled && theme.mode === 'LIGHT' ? theme.disabledStyle() : {}),
    },
  }),
);
