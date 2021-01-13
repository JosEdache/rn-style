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
import styleFactory from './styleFactory';

const options = {forwardRef: true};
const listOptions = {...options, stylePropKey: 'contentContainerStyle' as any};

const nativeStyleComponentFactories = {
  View: styleFactory(View, options),
  Text: styleFactory(Text, options),
  TextInput: styleFactory(TextInput, options),
  Image: styleFactory(Image, options),
  ImageBackground: styleFactory(ImageBackground, options),
  ScrollView: styleFactory(ScrollView, listOptions),
  FlatList: styleFactory(FlatList, listOptions),
  SectionList: styleFactory(SectionList, listOptions),
  VirtualizedList: styleFactory(VirtualizedList, listOptions),
  TouchableHighlight: styleFactory(TouchableHighlight, options),
  TouchableOpacity: styleFactory(TouchableOpacity, options),
  TouchableNativeFeedback: styleFactory(TouchableNativeFeedback, options),
  TouchableWithoutFeedback: styleFactory(TouchableWithoutFeedback, options),
};

export default nativeStyleComponentFactories;
