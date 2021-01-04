import React from 'react';
import {StyleProp} from 'react-native';
import type {StyleMap} from './types';
import splitStyleProps from './splitStyleProps';
import splitExcludedProps from './splitExcludedProps';
import getStylePredicate from './getStylePredicate';
import composeInitialStyle from './composeInitialStyle';
import composeProps from './composeProps';
import {StyleProviderProps, useStyleContext} from './Context';

export type KeyOfStyleMap = keyof StyleMap;

export type IntialStyle<P, S extends KeyOfStyleMap> =
  | StyleProp<StyleMap[S]>
  | ((props: P, ctx: StyleProviderProps) => StyleProp<StyleMap[S]>);

export type WithStyleProps<P, S> = {children?: React.ReactNode} & S & P;

export interface WithStyleEnhancerOption<P> {
  stylePropKey?: keyof P;
  excludeProps?: (keyof P)[];
}

export interface StyleEnhancerOption<P, S extends KeyOfStyleMap> {
  stylePropKey?: keyof P;
  // styleType?: S;
  forwardRef?: boolean;
  excludeFowardedProps?: (keyof P)[];
  // initialStyle?:
  //   | StyleProp<StyleMap[S]>
  //   | ((props: P, ctx: StyleProviderProps) => StyleProp<StyleMap[S]>);
}

export function createStyleEnhancer() {
  styleEnhancer.withAllStyle = createStyleTypeEnhancer('AllStyle');
  styleEnhancer.withImageStyle = createStyleTypeEnhancer('ImageStyle');
  styleEnhancer.withLayoutStyle = createStyleTypeEnhancer('LayoutStyle');
  styleEnhancer.withFlexStyle = createStyleTypeEnhancer('FlexStyle');
  styleEnhancer.withShadowStyleIOS = createStyleTypeEnhancer('ShadowStyleIOS');
  styleEnhancer.withTextStyle = createStyleTypeEnhancer('TextStyle');
  styleEnhancer.withTransformsStyle = createStyleTypeEnhancer(
    'TransformsStyle',
  );
  styleEnhancer.withViewStyle = createStyleTypeEnhancer('ViewStyle');

  return styleEnhancer;

  function createStyleTypeEnhancer<S extends KeyOfStyleMap>(styleType: S) {
    return function <P>(
      Component: React.ComponentType<P>,
      options = {} as StyleEnhancerOption<P, S>,
    ) {
      return styleEnhancer(Component, styleType, options);
    };
  }

  function styleEnhancer<P, S extends KeyOfStyleMap = 'AllStyle'>(
    Component: React.ComponentType<P>,
    styleType?: S,
    defaultOption = {} as StyleEnhancerOption<P, S>,
  ) {
    return function withStyle(
      initialStyle?: IntialStyle<P, S>,
      option = {} as StyleEnhancerOption<P, S>,
    ) {
      type Style = StyleMap[S];
      const {stylePropKey, forwardRef, excludeFowardedProps} = {
        ...defaultOption,
        ...option,
      };

      const WithStyle = React.forwardRef<
        typeof Component,
        WithStyleProps<P, Style>
      >(({children, ...props}, ref) => {
        const ctx = useStyleContext();

        const [style, componentProps] = splitStyleProps<
          Omit<P, 'children'>,
          Style
        >(props, getStylePredicate(styleType));

        const [toForwardProps] = splitExcludedProps(
          componentProps as P,
          excludeFowardedProps,
        );

        const composedProps = composeProps(
          toForwardProps,
          [composeInitialStyle(componentProps, initialStyle, ctx), style],
          stylePropKey as any,
        );

        if (forwardRef) {
          return <Component ref={ref} children={children} {...composedProps} />;
        }
        return <Component children={children} {...composedProps} />;
      });

      WithStyle.displayName = `WithStyle(${Component.displayName})`;

      return WithStyle;
    };
  }
}

export default createStyleEnhancer();
