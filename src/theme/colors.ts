export interface Colors {
  // [key: string]: any;
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryText: string;
  primaryLightText: string;
  primaryDarkText: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  secondaryText: string;
  secondaryLightText: string;
  secondaryDarkText: string;
  additional: string;
  additionalLight: string;
  additionalDark: string;
  additionalText: string;
  additionalLightText: string;
  additionalDarkText: string;
  surface: string;
  background: string;
  error: string;
  black: string;
  white: string;
  surfaceText: string;
  backgroundText: string;
  errorText: string;
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
    primary: '#6200ee',
    primaryDark: '#3700B3',
    secondary: '#152d4a',
    secondaryDark: '#018786',
    surface: '#ffffff',
    background: '#ffffff',
    error: '#b00020',
    black: '#000',
    white: '#ffffff',
    primaryText: '#ffffff',
    secondaryText: '#ffffff',
    surfaceText: '#000000',
    backgroundText: '#000000',
    errorText: '#ffffff',
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
    ...colors,
  } as C;
}

export const DEFAULT_COLORS = createColors();
