export const cycle = function* (arr) {
  while (true) yield* arr;
}

