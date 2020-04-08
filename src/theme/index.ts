import {Typography, createTypography} from './typography';
import {
  Colors,
  createColors,
  DEFAULT_DARK_COLORS,
  DEFAULT_LIGHT_COLORS,
} from './colors';
import {shadow, surfaceOverlay} from './shadow';
import {spacing} from './spacing';
import {MergeRecursive, PartialRecursive, ThemeMode} from '../types';
import {disabledStyle} from './states';

export * from './typography';
export * from './colors';
export * from './shadow';
export * from './spacing';
export * from './states';

export interface Theme {
  mode: ThemeMode;
  colors: Colors;
  typography: Typography;
  shadow: typeof shadow;
  spacing: typeof spacing;
  surfaceOverlay: (overlay: number) => {} | ReturnType<typeof surfaceOverlay>;
  disabledStyle: typeof disabledStyle;
}

export type ThemeConfig<T> = MergeRecursive<
  T,
  {
    lightColors: Colors;
    darkColors: Colors;
  } & Omit<Theme, 'colors'>
>;

export type MergeRecursiveTheme<T> = MergeRecursive<T, Theme>;
export type MergeRecursiveThemeMode<T> = MergeRecursiveTheme<
  Omit<T, 'lightColors' | 'darkColors'>
>;

export const DEFAULT_THEME = createTheme({
  lightColors: DEFAULT_LIGHT_COLORS,
  darkColors: DEFAULT_DARK_COLORS,
  mode: 'LIGHT',
});

export function createTheme<T extends ThemeConfig<T>>(
  theme: PartialRecursive<T>,
): T {
  return theme as T;
}

export function configureTheme<T extends ThemeConfig<T>>(
  theme: PartialRecursive<T> = {},
): MergeRecursiveThemeMode<T> {
  const {
    mode = 'LIGHT',
    lightColors,
    darkColors,
    typography,
    ...others
  } = theme;
  const colors =
    (mode as any) === 'LIGHT'
      ? {...DEFAULT_LIGHT_COLORS, ...lightColors}
      : {...DEFAULT_DARK_COLORS, ...darkColors};
  return {
    mode: mode,
    spacing,
    shadow,
    surfaceOverlay: overlay =>
      mode === 'LIGHT' ? {} : surfaceOverlay(overlay),
    disabledStyle: props =>
      disabledStyle({
        ...props,
        mode: (props && props.mode) || (mode as ThemeMode),
      }),
    ...others,
    colors: createColors(colors),
    typography: createTypography(typography as any),
  } as MergeRecursiveThemeMode<T>;
}
