import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../common/utils';
import { startGame } from '..';

export const isEven = (num) => {
  return ((num % 2) === 0) ? true : false;
};

const gameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = (isEven(question)) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
  startGame(gameDescription, gameData);
};
