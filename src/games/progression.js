import { cons } from 'hexlet-pairs';
import { startGame } from '..';
import getRandomInt from '../common/getRandomInt';

const getProgressionMember = (initial, pos, diff) => initial + ((pos - 1) * diff);

const progression = (initialTerm, commonDifference, position, lengthProgression) => {
  const iter = (acc, strLength) => {
    const number = getProgressionMember(initialTerm, strLength, commonDifference);
    const curentAcc = (strLength === position) ? `${acc} ..` : `${acc} ${number}`;
    if (strLength === lengthProgression) {
      return acc;
    }
    return iter(curentAcc, strLength + 1);
  };
  return iter('', 1);
};

const buildGame = (difficulty) => {
  const selectDifficulty = (num) => {
    switch (num) {
      case '1':
        return getRandomInt(1, 5);
      case '2':
        return getRandomInt(1, 20);
      case '3':
        return getRandomInt(1, 100);
      case '4':
        return getRandomInt(1, 1000);
      default:
        return getRandomInt(1, 5);
    }
  };
  const initialTerm = getRandomInt(0, 20);
  const commonDifference = selectDifficulty(difficulty);
  const position = getRandomInt(2, 9);
  const lengthProgression = 11;
  const progressionResut = progression(initialTerm, commonDifference, position, lengthProgression);
  const question = progressionResut;
  const correctAnswer = String(getProgressionMember(initialTerm, position, commonDifference));
  return cons(question, correctAnswer);
};

export default () => {
  const difficulty = '4';
  const rule = 'What number is missing in this progression?';
  const gameDescription = cons(difficulty, rule);
  startGame(gameDescription, buildGame);
};
