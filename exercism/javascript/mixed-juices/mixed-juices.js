// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  const juices = {
    'Pure Strawberry Joy': 0.5,
    Energizer: 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5,
  };

  return name in juices ? juices[name] : 2.5;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const limesSize = {
    small: 6,
    medium: 8,
    large: 10,
  }

  const calc = limes.reduce((obj, curr) => {
    if (obj.total >= wedgesNeeded) {
      return obj;
    }

    return {
      limes: obj.limes + 1,
      total: obj.total + limesSize[curr],
    };
  }, { limes: 0, total: 0 });

  return calc.limes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const remaining = orders.reduce((obj, order) => {
    if (obj.minutes <= 0) {
      return obj;
    }

    return {
      done: obj.done + 1,
      minutes: obj.minutes - timeToMixJuice(order),
    }
  }, {
    done: 0,
    minutes: timeLeft,
  });

  return orders.filter((_, idx) => idx >= remaining.done);
}
