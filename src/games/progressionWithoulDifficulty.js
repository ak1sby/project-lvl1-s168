import { cons, car, cdr } from 'hexlet-pairs';
import { startGame } from '..';
import getRandomInt from '../common/getRandomInt';

const getProgression = (initial, commonDifference, position, lengthProgression) => {
  const spaceNumber = (lengthProgression + 1) - position;
  const step = getRandomInt(1, 5);
  const iter = (acc, strLength, number, difference) => {
    const curentAcc = (strLength === spaceNumber) ? cons(`${car(acc)} ..`, cdr(acc) + number) : cons(`${car(acc)} ${number}`, cdr(acc));
    if (strLength === 0) {
      return acc;
    }
    return iter(curentAcc, strLength - 1, number + difference, difference + step);
  };
  return iter(cons('', 0), lengthProgression, initial, commonDifference);
};

const buildGame = () => {
  const initial = getRandomInt(0, 20);
  const difference = getRandomInt(1, 5);
  const position = getRandomInt(4, 6);
  const lengthProgression = 10;
  const progressionResut = getProgression(initial, difference, position, lengthProgression);
  const question = car(progressionResut);
  const correctAnswer = String(cdr(progressionResut));
  return cons(question, correctAnswer);
};

export default () => {
  const difficulty = 'default';
  const rule = 'What number is missing in this progression?';
  const gameDescription = cons(difficulty, rule);
  startGame(gameDescription, buildGame);
};
