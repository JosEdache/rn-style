import {StyleSheet, Platform, Animated} from 'react-native';

type ShadowNumber = number | Animated.Value;

export interface Shadow {
  shadowColor: string;
  shadowOffset: {
    width: ShadowNumber;
    height: number | Animated.AnimatedMultiplication;
  };
  shadowOpacity: ShadowNumber;
  shadowRadius: number | Animated.AnimatedMultiplication;
}

export interface Elevation {
  elevation: ShadowNumber;
}

const animatedHeight = new Animated.Value(0.5);
const animatedRadius = new Animated.Value(0.8);
const animatedOpacity = new Animated.Value(0.3);
const animatedWidth = new Animated.Value(0);

export function shadow(
  elevation: number | Animated.Value = 0,
): Shadow | Elevation {
  return Platform.OS === 'android'
    ? {
        elevation,
      }
    : typeof elevation === 'number'
    ? {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0.5 * elevation},
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation,
      }
    : {
        shadowColor: 'black',
        shadowOffset: {
          width: animatedWidth,
          height: Animated.multiply(animatedHeight, elevation),
        },
        shadowOpacity: animatedOpacity,
        shadowRadius: Animated.multiply(animatedRadius, elevation),
      };
}

export function overlay(opacity: number) {
  // return `rgba(255, 255, 255, ${opacity / 100} )`;
  return {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: `rgba(255, 255, 255, ${opacity / 100})`,

    ...(opacity < 5
      ? {
          borderWidth: 1,
          borderColor: `rgba(255, 255, 255, ${25 / 100})`,
          backgroundColor: '#121212',
        }
      : {}),
  };
}

export function surfaceOverlay(n: number) {
  let pb;
  let pe;
  let b;
  let e;

  pb = 0;
  pe = 5;
  b = 0;
  e = 1;
  if (n >= b && n <= e) {
    return overlay(overlayFormalar({n, pb, pe, b, e}));
  }

  if (n > 1 && n <= 6) {
    return overlay(n + 5);
  }

  pb = 11;
  pe = 12;
  b = 6;
  e = 8;
  if (n >= b && n <= e) {
    return overlay(overlayFormalar({n, pb, pe, b, e}));
  }

  pb = 12;
  pe = 14;
  b = 8;
  e = 12;
  if (n >= b && n <= e) {
    return overlay(overlayFormalar({n, pb, pe, b, e}));
  }

  pb = 14;
  pe = 15;
  b = 12;
  e = 16;
  if (n >= b && n <= e) {
    return overlay(overlayFormalar({n, pb, pe, b, e}));
  }

  pb = 15;
  pe = 16;
  b = 16;
  e = 24;
  if (n >= b && n <= e) {
    return overlay(overlayFormalar({n, pb, pe, b, e}));
  }
  return overlay(16);
}

type OverlayFormularProps = {
  pb: number;
  pe: number;
  b: number;
  e: number;
  n: number;
};
export function overlayFormalar(props: OverlayFormularProps) {
  const {n, pb, pe, b, e} = props;
  return pb + (n - b) * ((pe - pb) / (e - b));
}
