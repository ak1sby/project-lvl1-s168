import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../common/utils';
import { startGame } from '..';

const isPrime = (a) => {
  if (a < 2) {
    return false;
  }

  let i = 2;

  while (i <= a / 2) {
    if (a % i === 0) {
      return false;
    }
    i++;
  }
  return true;
};

export const isEven = num => (((num % 2) === 0));

const gameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = (isPrime(question)) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'Is this number prime?';
  startGame(gameDescription, gameData);
};
