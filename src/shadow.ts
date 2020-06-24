import {Platform, Animated} from 'react-native';

type ShadowNumber = number | Animated.Value;

export interface Shadow {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
}

export interface Elevation {
  elevation: number;
}

const animatedHeight = new Animated.Value(0.5);
const animatedRadius = new Animated.Value(0.8);
const animatedOpacity = new Animated.Value(0.3);
const animatedWidth = new Animated.Value(0);

export function shadow(
  elevation: number | Animated.Value = 0,
): Shadow | Elevation {
  return (Platform.OS === 'android'
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
      }) as Shadow | Elevation;
}

export default shadow;
