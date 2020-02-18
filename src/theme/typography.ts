export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export interface ScaleCategory {
  fontFamily: string;
  fontWeight: FontWeight;
  fontSize: number;
  letterSpacing: number;
  textTransform:
    | 'uppercase'
    | 'lowercase'
    // | 'All Caps'
    // | 'Sentence'
    | 'none'
    | 'capitalize';
}

export interface Typography {
  fontFamily: ScaleCategory['fontFamily'];
  fontSize: ScaleCategory['fontSize'];
  fontWeightLight: FontWeight;
  fontWeightRegular: FontWeight;
  fontWeightMedium: FontWeight;
  fontWeightBold: FontWeight;
  h1: ScaleCategory;
  h2: ScaleCategory;
  h3: ScaleCategory;
  h4: ScaleCategory;
  h5: ScaleCategory;
  h6: ScaleCategory;
  subtitle1: ScaleCategory;
  subtitle2: ScaleCategory;
  body1: ScaleCategory;
  body2: ScaleCategory;
  button: ScaleCategory;
  caption: ScaleCategory;
  overline: ScaleCategory;
}

type OptionalTypography = PartialRecursive<Typography>;
type OptionalScaleCategory = PartialRecursive<ScaleCategory>;

export const DEFAULT_TYPOGRAPHY = createTypography();

export function createTypography<T extends MergeRecursive<T, Typography>>(
  typography: PartialRecursive<T> = {},
): T {
  const config = {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '500',
    fontWeightBold: '700',
  };

  return {
    ...config,
    h1: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightLight || config.fontWeightLight,
      fontSize: 96,
      letterSpacing: -1.5,
    },

    h2: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightLight || config.fontWeightLight,
      fontSize: 60,
      letterSpacing: -0.5,
    },
    h3: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightRegular || config.fontWeightRegular,
      fontSize: 48,
      letterSpacing: 0,
    },
    h4: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightRegular || config.fontWeightRegular,
      fontSize: 34,
      letterSpacing: 0.25,
    },
    h5: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightRegular || config.fontWeightRegular,
      fontSize: 24,
      letterSpacing: 0,
    },
    h6: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightMedium || config.fontWeightMedium,
      fontSize: 20,
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightRegular || config.fontWeightRegular,
      fontSize: 16,
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightMedium || config.fontWeightMedium,
      fontSize: 14,
      letterSpacing: 0.1,
    },
    body1: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightRegular || config.fontWeightRegular,
      fontSize: 16,
      letterSpacing: 0.5,
    },
    body2: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightRegular || config.fontWeightRegular,
      fontSize: 14,
      letterSpacing: 0.25,
    },
    button: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightMedium || config.fontWeightMedium,
      fontSize: 14,
      letterSpacing: 1.25,
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightRegular || config.fontWeightRegular,
      fontSize: 12,
      letterSpacing: 0.4,
    },
    overline: {
      fontFamily: typography.fontFamily || config.fontFamily,
      fontWeight: typography.fontWeightRegular || config.fontWeightRegular,
      fontSize: 10,
      letterSpacing: 1.5,
      // textTransform: 'uppercase',
    },
    ...typography,
  } as T;
}
