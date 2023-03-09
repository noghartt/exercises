/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * @param {number} restTime the amount of rest time until lasagna has been cooked.
 */
export const cookingStatus = (restTime) => {
  if (typeof restTime === 'undefined') {
    return 'You forgot to set the timer.';
  }

  return restTime === 0 ? 'Lasagna is done.' : 'Not done, please wait.';
}

export const preparationTime = (layers, time = 2) => layers.length * time;

export const quantities = (layers) => {
  const quantityPerLayer = {
    noodles: 50,
    sauce: 0.2,
  }

  return layers.reduce((obj, item) => {
    if (item === 'noodles') {
      return {
        ...obj,
        noodles: obj.noodles + quantityPerLayer.noodles,
      }
    }

    if (item === 'sauce') {
      return {
        ...obj,
        sauce: obj.sauce + quantityPerLayer.sauce,
      }
    }

    return obj;
  }, { noodles: 0, sauce: 0 });
}

export const addSecretIngredient = (friendList, myList) => {
  myList.push(friendList[friendList.length - 1])
}

export const scaleRecipe = (recipeList, portions) => {
  const recipePerPortions = Object.entries(recipeList)
    .map(([key, value]) => [key, value / 2])
    .map(([key, value]) => [key, value * portions]);

  return Object.fromEntries(recipePerPortions);
}
