import { cons } from 'hexlet-pairs';
import { startGame } from '..';
import getRandomInt from '../common/getRandomInt';

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

const gameData = (difficulty) => {
  const selectDifficulty = (num) => {
    switch (num) {
      case '1':
        return getRandomInt(1, 100);
      case '2':
        return getRandomInt(1, 1000);
      case '3':
        return getRandomInt(1, 10000);
      default:
        return getRandomInt(1, 100);
    }
  };
  const operator = getRandomOpr();
  const firstOperand = selectDifficulty(difficulty);
  const secondOperand = selectDifficulty(difficulty);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(calc(operator, firstOperand, secondOperand));
  return cons(question, correctAnswer);
};

export default () => {
  const difficulty = '3';
  const rule = 'What is the result of the expression?';
  const gameDescription = cons(difficulty, rule);
  startGame(gameDescription, gameData);
};
