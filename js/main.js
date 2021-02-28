'use strict';

//За основу взят пример из источника https://learn.javascript.ru/task/random-int-min-max

const chooseNumber = (min, max) => {
  // случайное число от min до (max+1)
  if ((min >= 0 && min < max) || (min === max)) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return (' Неккоректно указан диапазон чисел.');
}

const doNotRepeat = (min, max) => {
  return Math.floor(chooseNumber(min, max) * Math.random());
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

// Коллекция имён (массив)
const names = [
  'Алексей', 'Александр', 'Андрей', 'Александра', 'Ангелина', 'Борис', 'Бротислав', 'Бэн', 'Бонни', 'Бэлла',
  'Владимир', 'Вячеслав', 'Воланд', 'Виктория', 'Валерия', 'Григорий', 'Герман', 'Геннадий', 'Галина', 'Гертруда',
  'Дмитрий', 'Денис', 'Довлат', 'Дарья', 'Дана',
];

//Коллекция сообщений (массив)
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const generateMessage = () => {
  const index = chooseNumber(0, 5);
  if (index <= messages.length - 1) {
    return messages[index];
  }
  return 'Некорректное значение';
}

const generateName = () => {
  const pointer = chooseNumber(0, 24);
  if (pointer <= names.length - 1) {
    return names[pointer];
  }
  return 'Некорректное значение';
}

const commentGenerator = {
  id: chooseNumber(15, 200),
  avatar: 'img/avatar' + doNotRepeat(1, 6) + '.svg',
  message: generateMessage(),
  name: generateName(),
};

const useGenerationPhoto = () =>
  (
    {
      id: doNotRepeat(1, 25),
      url: 'photos/' + doNotRepeat(1, 25) + '.jpg',
      description: 'Напишите здесь, чем ассоциуруется Ваша фотография',
      likes: chooseNumber(15, 200),
      comments: commentGenerator,
    }
  );

const generateFinal = (quantity) => {
  const photos = [];
  for (let i = 0; i < quantity; i++) {
    photos.push(useGenerationPhoto());
  }
  return photos;
};

generateFinal(25);

