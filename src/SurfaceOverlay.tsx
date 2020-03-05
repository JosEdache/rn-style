import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import {makeStyle, useTheme} from './styles';
import {surfaceOverlay, Colors, disabledStyle} from './theme';

export interface SurfaceOverlayProps {
  overlay: number;
  brand?: keyof Colors;
  disabled?: boolean;
}

export function SurfaceOverlay(props: SurfaceOverlayProps) {
  const styles = useStyle(props);
  const theme = useTheme();
  return theme.mode === 'DARK' ? (
    <Fragment>
      {props.brand && !props.disabled ? <View style={styles.brand} /> : null}
      <View style={styles.overlay} />
    </Fragment>
  ) : null;
}

SurfaceOverlay.defaultProps = {
  overlay: 0,
  disabled: false,
};

export default SurfaceOverlay;

const useStyle = makeStyle(
  (theme, {overlay, brand, disabled}: SurfaceOverlayProps) => ({
    brand: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.colors[brand!] || brand,
      opacity: brand ? 8 / 100 : 1,
    },
    overlay: {
      ...surfaceOverlay(overlay),
      ...(disabled ? disabledStyle({isBrand: !!brand, mode: theme.mode}) : {}),
    },
  }),
);
