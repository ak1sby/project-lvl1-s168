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

const gameData = (difficulty) => {
  const selectDifficulty = (num) => {
    switch (num) {
      case '1':
        return getRandomInt(1, 50);
      case '2':
        return getRandomInt(1, 100);
      case '3':
        return getRandomInt(1, 1000);
      default:
        return getRandomInt(1, 50);
    }
  };
  const question = selectDifficulty(difficulty);
  const correctAnswer = (isPrime(question)) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'Is this number prime?';
  startGame(gameDescription, gameData);
};
