import { cons, car, cdr } from 'hexlet-pairs';
import { startGame } from '..';
import getRandomInt from '../common/utils';

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

const gameData = () => {
  const initialTerm = getRandomInt(0, 20);
  const commonDifference = getRandomInt(0, 5);
  const position = getRandomInt(2, 9);
  const lengthProgression = 10;
  const question = car(progression(initialTerm, commonDifference, position, lengthProgression));
  const getAnswer = cdr(progression(initialTerm, commonDifference, position, lengthProgression));
  const correctAnswer = String(getAnswer);
  return cons(question, correctAnswer);
};

export default () => {
  const difficulty = 'default';
  const rule = 'What number is missing in this progression?';
  const gameDescription = cons(difficulty, rule);
  startGame(gameDescription, gameData);
};
