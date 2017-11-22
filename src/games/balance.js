import { cons } from 'hexlet-pairs';
import { startGame } from '..';

const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

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

const gameData = () => {
  const question = getRandomInt(10, 100);
  const correctAnswer = String(balance(question));
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'Balance the given number.';
  startGame(gameDescription, gameData);
};
