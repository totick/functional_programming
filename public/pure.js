/**
 * Pure function example.
 * In a pure function the same input always returns the same output.
 * Pure functions are persistent and easy to test.
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
const add = (x, y) => x + y;

/**
 * Impure function example.
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
const addImpure = (x, y) => {
  console.log('sum:', x + y); // External and produces side effects making this an impure function.
  return x + y;
};
