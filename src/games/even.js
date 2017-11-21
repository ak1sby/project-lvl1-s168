import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import { isEven, getRandomInt } from '../common/functions';
import { startGame } from '..';

const gameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = (isEven(question)) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
  startGame(gameDescription, gameData);
};
