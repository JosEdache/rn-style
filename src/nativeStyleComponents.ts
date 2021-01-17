import nativeStyleComponentFactories from './nativeStyleComponentFactories';
import composeStyles from './composeStyles';

function composeCtxStyles(key: string) {
  return (props: any, ctx: any) => {
    if (ctx && ctx[key]) {
      const [registeredStyles, functionStyles] = composeStyles(ctx[key]);
      return [
        ...registeredStyles,
        ...functionStyles.map((functionStyle) => functionStyle(props)),
      ];
    }
    return;
  };
}

export const StyleView = nativeStyleComponentFactories.View(
  composeCtxStyles('textStyle'),
);

export const StyleText = nativeStyleComponentFactories.Text(
  composeCtxStyles('textStyle'),
);

export const StyleTextInput = nativeStyleComponentFactories.TextInput(
  composeCtxStyles('textInputStyle'),
);

export const StyleImage = nativeStyleComponentFactories.Image(
  composeCtxStyles('imageStyle'),
);

export const StyleImageBackground = nativeStyleComponentFactories.ImageBackground(
  composeCtxStyles('imageBackgroundStyle'),
);

export const StyleScrollView = nativeStyleComponentFactories.ScrollView(
  composeCtxStyles('scrollViewStyle'),
);

export const StyleFlatList = nativeStyleComponentFactories.FlatList(
  composeCtxStyles('flatListStyle'),
);

export const StyleSectionList = nativeStyleComponentFactories.SectionList(
  composeCtxStyles('sectionListStyle'),
);

export const StyleVirtualizedList = nativeStyleComponentFactories.VirtualizedList(
  composeCtxStyles('virtualizedListStyle'),
);

export const StyleTouchableHighlight = nativeStyleComponentFactories.TouchableHighlight(
  composeCtxStyles('touchableHighlightStyle'),
);

export const StyleTouchableNativeFeedback = nativeStyleComponentFactories.TouchableNativeFeedback(
  composeCtxStyles('touchableNativeFeedbackStyle'),
);

export const StyleTouchableOpacity = nativeStyleComponentFactories.TouchableOpacity(
  composeCtxStyles('touchableOpacityStyle'),
);

export const StyleTouchableWithoutFeedback = nativeStyleComponentFactories.TouchableWithoutFeedback(
  composeCtxStyles('touchableWithoutFeedbackStyle'),
);
