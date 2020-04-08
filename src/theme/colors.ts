import {MergeRecursive, PartialRecursive} from '../types';

export interface Colors {
  // [key: string]: any;
  primary: string;
  primaryLight: string;
  primaryDark: string;
  textOnPrimary: string;
  textOnPrimaryLight: string;
  textOnPrimaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  textOnSecondary: string;
  textOnSecondaryLight: string;
  textOnSecondaryDark: string;
  alternative: string;
  alternativeLight: string;
  alternativeDark: string;
  textOnAlternative: string;
  textOnAlternativeLight: string;
  textOnAlternativeDark: string;

  /**
   * Brand surface overlay color
   *
   * Add 8% opacity to any brand color (eg. primary)
   * so that it can be used a brand surface color
   * in DARK theme mode
   * */
  brandSurfaceOverlay: string;
  surfaceLightDisabled: string;
  surfaceDarkDisabled: string;
  surface: string;
  background: string;
  error: string;
  black: string;
  white: string;
  textOnSurface: string;
  textOnBackground: string;
  textOnError: string;
  textOnLightDisabled: string;
  textOnLightHighEmphasis: string;
  textOnLightMediumEmphasis: string;
  textOnDarkDisabled: string;
  textOnDarkHighEmphasis: string;
  textOnDarkMediumEmphasis: string;
  grey50: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  grey800: string;
  grey900: string;
  greyA100: string;
  greyA200: string;
  greyA400: string;
  greyA700: string;
}

export function createColors<C extends MergeRecursive<C, Colors>>(
  colors: PartialRecursive<C> = {},
): C {
  return {
    grey50: '#fafafa',
    grey100: '#f5f5f5',
    grey200: '#eeeeee',
    grey300: '#e0e0e0',
    grey400: '#bdbdbd',
    grey500: '#9e9e9e',
    grey600: '#757575',
    grey700: '#616161',
    grey800: '#424242',
    grey900: '#212121',
    greyA100: '#d5d5d5',
    greyA200: '#aaaaaa',
    greyA400: '#303030',
    greyA700: '#616161',
    surfaceLightDisabled: '#0000001f',
    surfaceDarkDisabled: '#ffffff1f',
    textOnLightDisabled: '#00000061',
    textOnLightHighEmphasis: '#000000de',
    textOnLightMediumEmphasis: '#00000099',
    textOnDarkDisabled: '#ffffff61',
    textOnDarkHighEmphasis: '#ffffffde',
    textOnDarkMediumEmphasis: '#ffffff99',
    ...colors,
  } as C;
}

export const DEFAULT_LIGHT_COLORS = createColors({
  primary: '#6200EE',
  primaryDark: '#3700B3',
  secondary: '#03DAC6',
  secondaryDark: '#018786',
  surface: '#ffffff',
  background: '#ffffff',
  error: '#b00020',
  black: '#000000',
  white: '#ffffff',
  textOnPrimary: '#ffffff',
  textOnSecondary: '#ffffff',
  textOnSurface: '#000000',
  textOnBackground: '#000000',
  textOnError: '#ffffff',
});

export const DEFAULT_DARK_COLORS = createColors({
  primary: '#BB86FC',
  primaryDark: '#3700B3',
  secondary: '#03DAC6',
  surface: '#121212',
  background: '#121212',
  error: '#CF6679',
  black: '#000000',
  white: '#ffffff',
  textOnPrimary: '#000000',
  textOnSecondary: '#000000',
  textOnSurface: '#ffffff',
  textOnBackground: '#ffffff',
  textOnError: '#000000',
  brandSurfaceOverlay: '#BB86FC14',
});
