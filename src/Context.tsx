import React, {createContext, useContext} from 'react';
import {
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
  ViewProps,
  TextProps,
  TextInputProps,
  ImageProps,
  ImageBackgroundProps,
  ScrollViewProps,
  FlatListProps,
  SectionListProps,
  VirtualizedListProps,
  TouchableHighlightProps,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  TouchableWithoutFeedbackProps,
} from 'react-native';

type DefaultStyle<P, S> = StyleProp<S> | ((props: P) => StyleProp<S>);

export interface StyleProviderProps {
  [x: string]: any;
  viewStyle?: DefaultStyle<ViewProps, ViewStyle>;
  textStyle?: DefaultStyle<TextProps, TextStyle>;
  textInputStyle?: DefaultStyle<TextInputProps, TextStyle>;
  imageStyle?: DefaultStyle<ImageProps, ImageStyle>;
  imageBackgroundStyle?: DefaultStyle<ImageBackgroundProps, ViewStyle>;
  scrollViewStyle?: DefaultStyle<ScrollViewProps, ViewStyle>;
  flatListStyle?: DefaultStyle<FlatListProps<unknown>, ViewStyle>;
  sectionListStyle?: DefaultStyle<SectionListProps<unknown>, ViewStyle>;
  virtualizedListStyle?: DefaultStyle<VirtualizedListProps<unknown>, ViewStyle>;
  touchableHighlightStyle?: DefaultStyle<TouchableHighlightProps, ViewStyle>;
  touchableOpacityStyle?: DefaultStyle<TouchableOpacityProps, ViewStyle>;
  touchableNativeFeedbackStyle?: DefaultStyle<
    TouchableNativeFeedbackProps,
    ViewStyle
  >;
  touchableWithoutFeedbackStyle?: DefaultStyle<
    TouchableWithoutFeedbackProps,
    ViewStyle
  >;
}

export const StyleContext = createContext<StyleProviderProps>(undefined!);
export const StyleConsumer = StyleContext.Consumer;

export function StyleProvider(props: StyleProviderProps) {
  const {children, ...others} = props;
  return (
    <StyleContext.Provider value={others}>{children}</StyleContext.Provider>
  );
}

export const useStyleContext = () => useContext(StyleContext);
