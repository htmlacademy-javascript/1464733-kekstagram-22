import { names, messages } from './arrays.js';
import { chooseNumber} from './util.js';

const generateMessage = () => {
  const index = chooseNumber(0, 5);
  if (index <= messages.length - 1) {
    return messages[index];
  }
  return 'Некорректное значение';
}

const generateName = () => {
  const pointer = chooseNumber(0, names.length);
  if (pointer <= names.length - 1) {
    return names[pointer];
  }
  return 'Некорректное значение';
}

const commentGenerator = () => {
  const comments = [];
  const countComment = chooseNumber(0, 1);
  for (let i = 0; i <= countComment; i++) {
    comments.push({
      id: chooseNumber(15, 200),
      avatar: 'img/avatar' + chooseNumber(1, 6) + '.svg',
      message: generateMessage(),
      name: generateName(),
    });
  }
  return comments;
}

const useGenerationPhoto = (valueNumber) =>
  (
    {
      id: valueNumber + 1,
      url: 'photos/' + (valueNumber + 1) + '.jpg',
      description: 'Напишите здесь, чем ассоциуруется Ваша фотография',
      likes: chooseNumber(15, 200),
      comments: commentGenerator(),
    }
  );

const generateFinal = (quantity) => {
  const photos = [];
  for (let i = 0; i < quantity; i++) {
    photos.push(useGenerationPhoto(i));
  }
  return photos;
};

generateFinal(25);

