import {View, ViewStyle, ViewProps} from 'react-native';
import withViewStyleForwardRef from './withViewStyleFowardRef';

export interface StyleViewProps extends ViewStyle, ViewProps {
  children?: React.ReactNode;
  animated?: boolean;
}

export const StyleView = withViewStyleForwardRef(View);

StyleView.defaultProps = {
  elevation: 0,
};

export default StyleView;
