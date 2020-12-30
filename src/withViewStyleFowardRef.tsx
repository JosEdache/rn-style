import React from 'react';
import {WithViewStyleProps, WithStyleOptions} from './types';
import splitViewStyleProps from './splitViewStyleProps';
import composeProps from './composeProps';

export function withViewStyleFowardRef<P>(
  Component: React.ComponentType<P>,
  options = {} as WithStyleOptions,
) {
  const {stylePropKey = 'style'} = options;
  const WithViewStyleFowardRef = React.forwardRef<
    typeof Component,
    WithViewStyleProps<P>
  >((props, ref) => {
    const [styles, others] = splitViewStyleProps(props);
    const cProps = composeProps(styles, others, stylePropKey) as P;
    return <Component ref={ref} {...cProps} />;
  });

  WithViewStyleFowardRef.displayName = `WithViewStyleFowardRef(${Component.displayName})`;

  return WithViewStyleFowardRef;
}

export default withViewStyleFowardRef;
