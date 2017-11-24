import { cons } from 'hexlet-pairs';
import { startGame } from '..';
import getRandomInt from '../common/getRandomInt';

const balance = (number) => {
  const numberStr = String(number);
  const strLength = numberStr.length;
  const sumNumber = (n) => {
    if (n < 10) {
      return n;
    }
    return (n % 10) + Math.floor(sumNumber(n / 10));
  };
  const remainder = sumNumber(number) % strLength;
  const pureNumber = sumNumber(number) - remainder;
  const average = pureNumber / strLength;
  const iter = (acc, length, averageValue, remainderValue) => {
    if (length === 0) {
      return acc;
    } else if (length <= remainderValue) {
      return iter(acc + (1 * (averageValue + 1)), length - 1, averageValue, remainderValue - 1);
    }
    return iter(acc + averageValue, length - 1, averageValue, remainderValue);
  };
  return iter('', strLength, average, remainder);
};

const buildGame = (difficulty) => {
  const selectDifficulty = (num) => {
    switch (num) {
      case '1':
        return getRandomInt(10, 100);
      case '2':
        return getRandomInt(100, 1000);
      case '3':
        return getRandomInt(1000, 10000);
      default:
        return getRandomInt(10, 100);
    }
  };

  const question = selectDifficulty(difficulty);
  const correctAnswer = String(balance(question));
  return cons(question, correctAnswer);
};

export default () => {
  const difficulty = '3';
  const rule = 'Balance the given number.';
  const gameDescription = cons(difficulty, rule);
  startGame(gameDescription, buildGame);
};
