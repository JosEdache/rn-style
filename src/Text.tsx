import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import {makeStyle} from './styles';
import {Colors, Typography, shadow} from './theme';

export interface TextProps extends TextStyle, RNTextProps {
  children?: React.ReactNode;
  backgroundColor: keyof Colors & string;
  category: keyof Omit<
    Typography,
    | 'fontFamily'
    | 'fontSize'
    | 'fontWeightLight'
    | 'fontWeightRegular'
    | 'fontWeightMedium'
    | 'fontWeightBold'
  >;
  color: keyof Colors;
  style?: TextStyle;
  disabled?: boolean;
}

export function Text(props: TextProps) {
  const {
    allowFontScaling,
    ellipsizeMode,
    lineBreakMode,
    numberOfLines,
    onLayout,
    onPress,
    onLongPress,
    style,
    testID,
    nativeID,
    maxFontSizeMultiplier,
    adjustsFontSizeToFit,
    minimumFontScale,
    suppressHighlighting,
    selectable,
    selectionColor,
    textBreakStrategy,
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
    ...others
  } = props;
  const styles = useStyle(others);
  return (
    <RNText
      {...{
        allowFontScaling,
        ellipsizeMode,
        lineBreakMode,
        numberOfLines,
        onLayout,
        onPress,
        onLongPress,
        testID,
        nativeID,
        maxFontSizeMultiplier,
        adjustsFontSizeToFit,
        minimumFontScale,
        suppressHighlighting,
        selectable,
        selectionColor,
        textBreakStrategy,
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
      }}
      style={[styles.text, style]}
    />
  );
}

Text.defaultProps = {
  category: 'body2',
  color: 'black',
  backgroundColor: 'transparent',
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
      backgroundColor: theme.colors[backgroundColor] || backgroundColor,
      ...theme.typography[category],
      fontFamily: fontFamily || theme.typography[category].fontFamily,
      fontSize: fontSize || theme.typography[category].fontSize,
      fontWeight: fontWeight || theme.typography[category].fontWeight,
      textTransform: textTransform || theme.typography[category].textTransform,
      letterSpacing: letterSpacing || theme.typography[category].letterSpacing,
      textAlign: textAlign,
      color:
        theme.colors[
          disabled
            ? theme.mode === 'LIGHT'
              ? 'textOnLightDisabled'
              : 'textOnDarkDisabled'
            : color
        ] || color,
      ...shadow(elevation),
      ...others,
    },
  }),
);
