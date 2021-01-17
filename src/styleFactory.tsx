import React from 'react';
import {StyleProp} from 'react-native';
import type {StyleMap} from './types';
import splitStyleProps from './splitStyleProps';
import splitExcludedProps from './splitExcludedProps';
import getStylePredicate from './getStylePredicate';
import composeStyles from './composeStyles';
import composeProps from './composeProps';
import {StyleProviderProps, useStyleContext} from './StyleContext';

interface AnyObjectProperties {
  [x: string]: any;

  hello: string;
}

export type KeyOfStyleMap = keyof StyleMap;

export type IntialStyles<P, S extends KeyOfStyleMap> =
  | StyleProp<StyleMap[S]>
  | ((props: P, ctx: StyleProviderProps) => StyleProp<StyleMap[S]>);

export type StyleComponentProps<P, S> = {children?: React.ReactNode} & S & P;

export interface StyleComponentFactoryOptions<P, S extends KeyOfStyleMap> {
  displayName?: string;
  propsAreStyleOverrides?: boolean;
  stylePropKey?: keyof P;
  styleType?: S;
  forwardRef?: boolean;
  excludeFowardedProps?: (keyof P)[];
}

export function createStyleFactory() {
  return styleFactory;

  function styleFactory<P = {}, S extends KeyOfStyleMap = 'AllStyle'>(
    Component: React.ComponentType<P>,
    options = {} as StyleComponentFactoryOptions<P, S>,
  ) {
    return function styleComponentFactory(...styles: IntialStyles<P, S>[]) {
      type Style = StyleMap[S];
      const [registeredStyles, functionStyles] = composeStyles(...styles);
      const {
        styleType,
        stylePropKey,
        forwardRef,
        excludeFowardedProps,
        displayName,
        propsAreStyleOverrides = true,
      } = options;

      const StyleComponent = React.forwardRef<
        typeof Component,
        StyleComponentProps<P, Style>
      >(({children, ...props}, ref) => {
        const ctx = useStyleContext();
        const [unExcludedProps] = splitExcludedProps(
          props as P,
          excludeFowardedProps,
        );

        const [styleProps, componentProps] = splitStyleProps(
          unExcludedProps,
          getStylePredicate(styleType),
        );

        const composedProps = composeProps(
          componentProps as P,
          stylePropKey as any,
          propsAreStyleOverrides ? {} : styleProps,
          ...registeredStyles,
          ...functionStyles.map((functionStyle) => functionStyle(props, ctx)),
          propsAreStyleOverrides ? styleProps : {},
        );

        if (forwardRef) {
          return <Component ref={ref} children={children} {...composedProps} />;
        }
        return <Component children={children} {...composedProps} />;
      });

      StyleComponent.displayName =
        displayName ||
        `styleComponent(${Component.displayName || 'StyleComponent'})`;

      return StyleComponent;
    };
  }
}

export default createStyleFactory();
