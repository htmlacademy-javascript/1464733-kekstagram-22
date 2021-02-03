'use strict';

//За основу взят пример из источника https://learn.javascript.ru/task/random-int-min-max

const chooseNumber = (min, max) => {
  // случайное число от min до (max+1)
  if ((min >= 0 && min < max) || (min === max)) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  console.log(' Неккоректно указан диапазон чисел.');
}

const chooseFromBig = (min, max) => {
  if (min > max) {
    return Math.floor(max + Math.random() * (min + 1 - max));
  }
  else chooseNumber(min, max);
}

//ниже будет код cтрелочной функции checkMaximumLength

const checkMaximumLength = (checkedString, maxLength) => {
  if (checkedString.length <= maxLength) {
    return checkedString;
  }
  console.log(' Строка не проходит по длинне');
};
