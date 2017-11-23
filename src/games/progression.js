import { cons, car, cdr } from 'hexlet-pairs';
import { startGame } from '..';
import getRandomInt from '../common/getRandomInt';

const progression = (initialTerm, commonDifference, position, lengthProgression) => {
  const iter = (acc, strLength, number, spaceNumber) => {
    if (strLength === 0) {
      return acc;
    } else if (strLength === spaceNumber) {
      return iter(cons(`${car(acc)} ..`, cdr(acc) + number), strLength - 1, number + commonDifference, spaceNumber);
    }
    return iter(cons(`${car(acc)} ${number}`, cdr(acc)), strLength - 1, number + commonDifference, spaceNumber);
  };
  return iter(cons('', 0), lengthProgression, initialTerm, (lengthProgression + 1) - position);
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
      case '4':
        return getRandomInt(1, 1000);
      default:
        return getRandomInt(1, 5);
    }
  };
  const initialTerm = getRandomInt(0, 20);
  const commonDifference = selectDifficulty(difficulty);
  const position = getRandomInt(2, 9);
  const lengthProgression = 10;
  const progressionResut = progression(initialTerm, commonDifference, position, lengthProgression);
  const question = car(progressionResut);
  const correctAnswer = String(cdr(progressionResut));
  return cons(question, correctAnswer);
};

export default () => {
  const difficulty = '4';
  const rule = 'What number is missing in this progression?';
  const gameDescription = cons(difficulty, rule);
  startGame(gameDescription, gameData);
};
