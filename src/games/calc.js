import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import { getRandomInt } from '../common/utils';
import { startGame } from '..';

export const getRandomOpr = () => {
  switch (getRandomInt(1, 4)) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '/';
  }
};

export const calc = (operator, firstOperand, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return firstOperand / secondOperand;
  }
};

const gameData = () => {
  const operator = getRandomOpr();
  const firstOperand = getRandomInt(1, 5);
  const secondOperand = getRandomInt(1, 5);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(calc(operator, firstOperand, secondOperand));
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'What is the result of the expression?';
  startGame(gameDescription, gameData);
};
