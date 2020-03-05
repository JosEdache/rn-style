import {ThemeMode} from '../types';
import {DEFAULT_DARK_COLORS, DEFAULT_LIGHT_COLORS} from './colors';
import {shadow, Shadow} from './shadow';

export interface DisabledStyle extends Shadow {
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
}

export interface DisabledParam {
  type?: 'TEXT' | 'BOX';
  mode?: ThemeMode;
  isBrand?: boolean;
}

export function disabledStyle({
  type = 'BOX',
  mode = 'LIGHT',
  isBrand = false,
}: DisabledParam = {}): DisabledStyle {
  if (mode === 'LIGHT') {
    return type === 'BOX'
      ? {
          backgroundColor: DEFAULT_LIGHT_COLORS.surfaceLightDisabled,
          ...shadow(0),
        }
      : {color: DEFAULT_LIGHT_COLORS.textOnLightDisabled, ...shadow(0)};
  }
  return type === 'BOX'
    ? {
        backgroundColor: isBrand
          ? DEFAULT_DARK_COLORS.surfaceDarkDisabled
          : '#121212',
        borderColor: DEFAULT_DARK_COLORS.surfaceDarkDisabled,
        borderWidth: isBrand ? 0 : 1,
        ...shadow(0),
      }
    : {
        color: DEFAULT_DARK_COLORS.textOnDarkDisabled,
        ...shadow(0),
      };
}
