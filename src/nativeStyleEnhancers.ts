import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  SectionList,
  VirtualizedList,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import styleEnhancer from './styleEnhancer';

const options = {forwardRef: true};

const nativeStyleEnhancers = {
  View: styleEnhancer.withViewStyle(View, options),
  Text: styleEnhancer.withTextStyle(Text, options),
  TextInput: styleEnhancer.withTextStyle(TextInput, options),
  Image: styleEnhancer.withImageStyle(Image, options),
  ImageBackground: styleEnhancer.withViewStyle(ImageBackground, options),
  ScrollView: styleEnhancer.withViewStyle(ScrollView, {
    ...options,
    stylePropKey: 'contentContainerStyle',
  }),
  FlatList: styleEnhancer.withViewStyle(FlatList, {
    ...options,
    stylePropKey: 'contentContainerStyle',
  }),
  SectionList: styleEnhancer.withViewStyle(SectionList, {
    ...options,
    stylePropKey: 'contentContainerStyle',
  }),
  VirtualizedList: styleEnhancer.withViewStyle(VirtualizedList, {
    ...options,
    stylePropKey: 'contentContainerStyle',
  }),
  TouchableHighlight: styleEnhancer.withViewStyle(TouchableHighlight, options),
  TouchableOpacity: styleEnhancer.withViewStyle(TouchableOpacity, options),
  TouchableNativeFeedback: styleEnhancer.withViewStyle(
    TouchableNativeFeedback,
    options,
  ),
  TouchableWithoutFeedback: styleEnhancer.withViewStyle(
    TouchableWithoutFeedback,
    options,
  ),
};

export default nativeStyleEnhancers;
