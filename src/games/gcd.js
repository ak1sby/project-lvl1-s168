import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import { getRandomInt, gcd } from '../common/functions';
import { startGame } from '..';

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
