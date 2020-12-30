import React from 'react';
import {WithViewStyleProps, WithStyleOptions} from './types';
import splitViewStyleProps from './splitViewStyleProps';
import composeProps from './composeProps';

export function withViewStyle<P = {}>(
  Component: React.ComponentType<P>,
  options = {} as WithStyleOptions,
) {
  const {stylePropKey = 'style'} = options;
  function WithViewStyle(props: Omit<WithViewStyleProps<P>, 'ref'>) {
    const [styles, others] = splitViewStyleProps(props);
    const cProps = composeProps(styles, others, stylePropKey) as P;
    return <Component {...cProps} />;
  }

  WithViewStyle.displayname = `withViewStyle(${Component.displayName})`;

  return WithViewStyle;
}

// const FRef = React.forwardRef<{a: string}, ViewProps>((props, ref) => <View />);

// class CRef extends React.Component {}

// const CustomView = withViewStyle(FRef);

// function Test() {
//   return <CustomView />;
// }
