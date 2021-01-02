export function splitExcludedProps<P, E extends keyof P>(
  props: P,
  exclusions: E[] = [],
) {
  const {remainder, excluded} = exclusions.reduce(
    (acc, exclusion) => {
      const prop = acc.remainder[exclusion];
      if (prop) {
        delete acc.remainder[exclusion];
        acc.excluded[exclusion] = prop;
      }
      return acc;
    },
    {remainder: {...props}, excluded: {} as {[A in E]: P[A]}},
  );
  return [remainder, excluded] as const;
}

export default splitExcludedProps;
