const chooseNumber = (min, max) => {
  // случайное число от min до (max+1)
  if ((min >= 0 && min < max) || (min === max)) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return (' Неккоректно указан диапазон чисел.');
}

const selectBackward = (min, max) => {
  if (min > max) {
    return Math.floor(max + Math.random() * (min + 1 - max));
  }
  else {
    return chooseNumber(min, max);
  }
}

selectBackward(0, 5);
//ниже будет код cтрелочной функции checkMaximumLength

const checkMaximumLength = (checkedString, maxLength) => {
  if (checkedString.length <= maxLength) {
    return checkedString;
  }
  return (' Строка не проходит по длинне');
};

checkMaximumLength('Это мой первый комментарий здесь!', 140);

export {chooseNumber};
