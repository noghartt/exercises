// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const stringifyArray = arr => arr.map(n => n.toString());
  const array1Sum = stringifyArray(array1).reduce((total, curr) => total + curr, '');
  const array2Sum = stringifyArray(array2).reduce((total, curr) => total + curr, '');

  return parseInt(array1Sum, 10) + parseInt(array2Sum, 10);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const reversedNumber = value
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversedNumber, 10) === value;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input?.length) return 'Required field';

  const numberedInput = Number(input.trim());

  if (Number.isNaN(numberedInput)) return 'Must be a number besides 0';

  return numberedInput <= 0 ? 'Must be a number besides 0' : '';
}
