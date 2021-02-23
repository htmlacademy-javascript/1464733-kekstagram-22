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
names;

//Коллекция сообщений (массив)
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
messages;

/* Создадим объект-генератор для дальнейшего создания массива списка комментариев */
const useGenerationComment = () => {
  const generateMessage = () => {
    const index = chooseNumber(0, 5);
    if (index <= messages.length - 1) {
      return messages[index];
    }
  }
  const generateName = () => {
    const pointer = chooseNumber(0, 24);
    if (pointer <= names.length - 1) {
      return names[pointer];
    }
  }
  const nameGenerator = {
    id: chooseNumber(15, 200),
    avatar: 'img/avatar-{{chooseNumber(1, 6)}}',
    message: generateMessage(),
    name: generateName(),
  };
  nameGenerator();
}

/* Создадим объект-генератор для  для дальнейшего создания массива объектов описании фотографии */
const useGenerationPhoto = () => {
  const photoGenerator = {
    id: chooseNumber(1, 25),
    url: 'photos/{{chooseNumber(1, 25)}}',
    description: 'Напишите здесь, чем ассоциуруется Ваша фотография',
    likes: chooseNumber(15, 200),
    comments: useGenerationComment(),
  };
  return photoGenerator;
}

/* Финальная генерация */
const generateFinal = (quantity) => {
  const photos = [];
  for (let i = 0; i < quantity; i++) {
    photos.push(useGenerationPhoto());
  }
}

generateFinal(25);
