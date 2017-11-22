import { cons } from 'hexlet-pairs';
import { startGame } from '..';

const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gameData = (difficulty) => {
  const selectDifficulty = (num) => {
    switch (num) {
      case '1':
        return getRandomInt(1, 5);
      case '2':
        return getRandomInt(1, 50);
      case '3':
        return getRandomInt(1, 100);
      default:
        return getRandomInt(1, 5);
    }
  };
  const firstOperand = selectDifficulty(difficulty);
  const secondOperand = selectDifficulty(difficulty);
  const question = `${firstOperand} ${secondOperand}`;
  const correctAnswer = String(gcd(firstOperand, secondOperand));
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  startGame(gameDescription, gameData);
};
