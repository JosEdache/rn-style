type PartialRecursive<T> = {
  [A in keyof T]?: T[A] extends object ? PartialRecursive<T[A]> : T[A];
};

type RequiredRecursive<T> = {
  [A in keyof T]: T[A] extends object ? PartialRecursive<T[A]> : T[A];
};

/**
 * merge type M with T in a recursive manner
 */
type MergeRecursive<M, T> = {
  [A in keyof M]: M[A] extends object ? MergeRecursive<M[A], M[A]> : M[A]
  // [A in keyof M]: M[A] extends object ? RequiredRecursive<M[A]> : M[A]
} &
  T;
