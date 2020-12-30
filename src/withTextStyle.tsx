import React from 'react';
import {WithTextStyleProps, WithStyleOptions} from './types';
import splitTextStyleProps from './splitTextStyleProps';
import composeProps from './composeProps';

export function withTextStyle<P = {}>(
  Component: React.ComponentType<P>,
  options = {} as WithStyleOptions,
) {
  const {stylePropKey = 'style'} = options;
  function WithTextStyle(props: Omit<WithTextStyleProps<P>, 'ref'>) {
    const [styles, others] = splitTextStyleProps(props);
    const cProps = composeProps(styles, others, stylePropKey) as P;
    return <Component {...cProps} />;
  }

  WithTextStyle.displayname = `withTextStyle(${Component.displayName})`;

  return WithTextStyle;
}
