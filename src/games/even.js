import { cons } from 'hexlet-pairs';
import { startGame } from '..';

const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const isEven = (num) => {
  return ((num % 2) === 0) ? true : false;
};

const gameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = (isEven(question)) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
  startGame(gameDescription, gameData);
};
