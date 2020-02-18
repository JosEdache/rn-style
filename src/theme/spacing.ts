export interface Spacing {
  (times?: number): number;
}

export const createSpacing: Spacing = (times: number = 1) => times * 4;
