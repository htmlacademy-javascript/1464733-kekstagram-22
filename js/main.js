'use strict';

//За основу взят пример из источника https://learn.javascript.ru/task/random-int-min-max

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  if (min >= 0 && min < max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  console.log(' Неккоректно указан диапазон чисел.');
}

//ниже будет код cтрелочной функции checkMaximumLength

const checkMaximumLength = (checkedString, maxLength) => {
  if (maxLength <= 140 && checkedString.length <= maxLength) {
    document.write(checkedString);
  }
  console.log(' Строка не проходит по длинне: в ней больше 140 символов!');
};
