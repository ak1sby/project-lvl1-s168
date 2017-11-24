import { cons } from 'hexlet-pairs';
import { startGame } from '..';
import getRandomInt from '../common/getRandomInt';

const isPrime = (n) => {
  const iter = (m, i) => {
    if (m < 2) {
      return false;
    } else if (m === 2) {
      return true;
    } else if (m % i === 0) {
      return false;
    } else if (i < m / 2) {
      return iter(m, i + 1);
    }
    return true;
  };
  return iter(n, 2);
};

const buildGame = (difficulty) => {
  const selectDifficulty = (num) => {
    switch (num) {
      case '1':
        return getRandomInt(1, 20);
      case '2':
        return getRandomInt(1, 50);
      case '3':
        return getRandomInt(1, 100);
      default:
        return getRandomInt(1, 20);
    }
  };
  const question = selectDifficulty(difficulty);
  const correctAnswer = (isPrime(question)) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const difficulty = '3';
  const rule = 'Is this number prime?';
  const gameDescription = cons(difficulty, rule);
  startGame(gameDescription, buildGame);
};
