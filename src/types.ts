import {
  FlexStyle,
  TransformsStyle,
  ViewStyle,
  ImageStyle,
  TextStyle,
  ShadowStyleIOS,
} from 'react-native';
export type PartialRecursive<T> = {
  [A in keyof T]?: T[A] extends object ? PartialRecursive<T[A]> : T[A];
};

export type RequiredRecursive<T> = {
  [A in keyof T]: T[A] extends object ? PartialRecursive<T[A]> : T[A];
};

/**
 * merge export type M with T in a recursive manner
 */
export type MergeRecursive<M, T> = {
  [A in keyof M]: M[A] extends object ? MergeRecursive<M[A], M[A]> : M[A];
  // [A in keyof M]: M[A] extends object ? RequiredRecursive<M[A]> : M[A]
} &
  T;

export type ThemeMode = 'LIGHT' | 'DARK';

export type StyleUnion =
  | FlexStyle
  | TransformsStyle
  | ShadowStyleIOS
  | ViewStyle
  | ImageStyle
  | TextStyle;

export type StyleIntersection = FlexStyle &
  TransformsStyle &
  ShadowStyleIOS &
  ViewStyle &
  ImageStyle &
  TextStyle;

export interface StyleMap {
  ViewStyle: ViewStyle;
  TextStyle: TextStyle;
  ImageStyle: ImageStyle;
  LayoutStyle: FlexStyle;
  FlexStyle: FlexStyle;
  TransformsStyle: TransformsStyle;
  ShadowStyleIOS: ShadowStyleIOS;
  AllStyle: StyleIntersection;
}
