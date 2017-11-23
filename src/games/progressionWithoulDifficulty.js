import { cons, car, cdr } from 'hexlet-pairs';
import { startGame } from '..';
import getRandomInt from '../common/getRandomInt';

const progression = (initialTerm, commonDifference, position, lengthProgression) => {
  const iter = (acc, strLength, number, spaceNumber, difference) => {
    const curentAcc = (strLength === spaceNumber) ? cons(`${car(acc)} ..`, cdr(acc) + number) : cons(`${car(acc)} ${number}`, cdr(acc));
    if (strLength === 0) {
      return acc;
    }
    return iter(curentAcc, strLength - 1, number + difference, spaceNumber, difference + position);
  };
  return iter(cons('', 0), lengthProgression, initialTerm, (lengthProgression + 1) - position, commonDifference);
};

const gameBuild = () => {
  const initialTerm = getRandomInt(0, 20);
  const commonDifference = getRandomInt(1, 5);
  const position = getRandomInt(3, 6);
  const lengthProgression = 10;
  const progressionResut = progression(initialTerm, commonDifference, position, lengthProgression);
  const question = car(progressionResut);
  const correctAnswer = String(cdr(progressionResut));
  return cons(question, correctAnswer);
};

export default () => {
  const difficulty = 'default';
  const rule = 'What number is missing in this progression?';
  const gameDescription = cons(difficulty, rule);
  startGame(gameDescription, gameBuild);
};
