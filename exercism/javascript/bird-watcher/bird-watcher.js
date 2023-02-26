// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((total, curr) => total + curr, 0);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let currentArray = 0;
  const mappedBirdsByWeek = birdsPerDay.reduce((arr, curr, idx) => {
    if (idx !== 0 && idx % 7 === 0) {
      currentArray += 1;
    }

    if (!arr[currentArray]) {
      return arr;
    }

    arr[currentArray] = [...arr[currentArray], curr];

    return arr;
  }, [...(Array.from({ length: week }, () => []))]);
  return mappedBirdsByWeek[week - 1].reduce((total, curr) => total + curr, 0);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  // A BETTER SOLUTION, WE DON'T NEED TO CHANGE THE ARRAY IN PLACE
  // return birdsPerDay.map((bird, idx) => idx % 2 === 0 ? bird + 1 : bird);
  for (let [idx] of birdsPerDay.entries()) {
    if (idx % 2 === 0) {
      birdsPerDay[idx] += 1
    }
  }

  return birdsPerDay;
}
