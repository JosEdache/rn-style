export function splitExcludedProps<P, E extends keyof P>(
  props: P,
  exclusions: E[] = [],
) {
  const {remainder, excluded} = exclusions.reduce(
    (acc, exclusion) => {
      if ((acc.remainder as any).hasOwnProperty(exclusion)) {
        acc.excluded[exclusion] = acc.remainder[exclusion];
        delete acc.remainder[exclusion];
      }
      return acc;
    },
    {remainder: {...props}, excluded: {} as {[A in E]: P[A]}},
  );
  return [remainder, excluded] as const;
}

export default splitExcludedProps;
