import { cons } from 'hexlet-pairs';
import { startGame } from '..';

const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

const progression = (initialTerm, commonDifference, position, lengthProgression) => {
  const iter = (acc, strLength, number, spaceNumber) => {
    if (strLength === 0) {
      return acc;
    } else if (strLength === spaceNumber) {
      return iter(`${acc} ..`, strLength - 1, number + commonDifference, spaceNumber);
    }
    return iter(`${acc} ${number}`, strLength - 1, number + commonDifference, spaceNumber);
  };
  return iter('', lengthProgression, initialTerm, (lengthProgression + 1) - position);
};

const gameData = (difficulty) => {
  const selectDifficulty = (num) => {
    switch (num) {
      case '1':
        return getRandomInt(1, 5);
      case '2':
        return getRandomInt(1, 20);
      case '3':
        return getRandomInt(1, 100);
      default:
        return getRandomInt(1, 5);
    }
  };
  const initialTerm = getRandomInt(0, 20);
  const commonDifference = selectDifficulty(difficulty);
  const position = getRandomInt(2, 9);
  const lengthProgression = 10;
  const question = progression(initialTerm, commonDifference, position, lengthProgression);
  const correctAnswer = String(initialTerm + ((position - 1) * commonDifference));
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'What number is missing in this progression?';
  startGame(gameDescription, gameData);
};
