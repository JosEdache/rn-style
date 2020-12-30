import {ShadowStyleIOS} from 'react-native';

export function splitShadowStyleIOSProps<P extends ShadowStyleIOS>(props: P) {
  const {
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    ...others
  } = props;

  return [
    {shadowColor, shadowOffset, shadowOpacity, shadowRadius},
    others,
  ] as const;
}

export default splitShadowStyleIOSProps;
