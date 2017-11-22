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

const gameData = () => {
  const firstOperand = getRandomInt(1, 5);
  const secondOperand = getRandomInt(1, 5);
  const question = `${firstOperand} ${secondOperand}`;
  const correctAnswer = String(gcd(firstOperand, secondOperand));
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  startGame(gameDescription, gameData);
};
