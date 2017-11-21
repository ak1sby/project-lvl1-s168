import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import { isEven, getRandomInt, getRandomOpr, calc } from '../common/functions';
import { startGame } from '..';

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
