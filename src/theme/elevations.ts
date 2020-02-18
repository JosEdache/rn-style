export interface Elevation {
  shadowColor: string;
  shadowOffset: {width: number; height: number};
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}
export interface Elevations {
  [key: string]: any;
  e0: Elevation;
  e1: Elevation;
  e2: Elevation;
  e3: Elevation;
  e4: Elevation;
  e5: Elevation;
  e6: Elevation;
  e7: Elevation;
  e8: Elevation;
  e9: Elevation;
  e10: Elevation;
  e11: Elevation;
  e12: Elevation;
  e13: Elevation;
  e14: Elevation;
  e15: Elevation;
  e16: Elevation;
  e17: Elevation;
  e18: Elevation;
  e19: Elevation;
  e20: Elevation;
  e21: Elevation;
  e22: Elevation;
  e23: Elevation;
  e24: Elevation;
}

export const DEFAULT_ELEVATION = createElevations();

export function createElevations<E extends MergeRecursive<E, Elevations>>(
  elevations: PartialRecursive<E> = {},
): E {
  return {
    ...generateElevations(),
    ...elevations,
  } as E;
}

function makeIOSAndroidElevation(elevation: number): Elevation {
  return {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0.5 * elevation},
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation,
    elevation,
  };
}

function generateElevations(): Elevations {
  let elevation = 0;
  const elevations = {} as Elevations;
  while (elevation <= 24) {
    elevations[`e${elevation}`] = makeIOSAndroidElevation(elevation);
    elevation++;
  }
  return elevations;
}
