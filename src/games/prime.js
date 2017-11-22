import { cons } from 'hexlet-pairs';
import { startGame } from '..';

const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

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

const gameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = (isPrime(question)) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'Is this number prime?';
  startGame(gameDescription, gameData);
};
