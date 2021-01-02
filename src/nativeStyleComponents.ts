import nativeStyleEnhancers from './nativeStyleEnhancers';

function composeInitialStyle<P, S>(props: P, style: S) {
  if (typeof style === 'object') {
    return style;
  } else if (typeof style === 'function') {
    return style(props);
  }
  return undefined;
}

export const StyleView = nativeStyleEnhancers.View((_, ctx) =>
  composeInitialStyle(_, ctx.textStyle),
);

export const StyleText = nativeStyleEnhancers.Text((_, ctx) =>
  composeInitialStyle(_, ctx.textStyle),
);

export const StyleTextInput = nativeStyleEnhancers.TextInput((_, ctx) =>
  composeInitialStyle(_, ctx.textInputStyle),
);

export const StyleImage = nativeStyleEnhancers.Image((_, ctx) =>
  composeInitialStyle(_, ctx.imageStyle),
);

export const StyleImageBackground = nativeStyleEnhancers.ImageBackground(
  (_, ctx) => composeInitialStyle(_, ctx.imageBackgroundStyle),
);

export const StyleScrollView = nativeStyleEnhancers.ScrollView((_, ctx) =>
  composeInitialStyle(_, ctx.scrollViewStyle),
);

export const StyleFlatList = nativeStyleEnhancers.FlatList((_, ctx) =>
  composeInitialStyle(_, ctx.flatListStyle),
);

export const StyleSectionList = nativeStyleEnhancers.SectionList((_, ctx) =>
  composeInitialStyle(_, ctx.sectionListStyle),
);

export const StyleVirtualizedList = nativeStyleEnhancers.VirtualizedList(
  (_, ctx) => composeInitialStyle(_, ctx.virtualizedListStyle),
);
