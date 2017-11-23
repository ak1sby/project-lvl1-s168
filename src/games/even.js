import { cons } from 'hexlet-pairs';
import { startGame } from '..';
import getRandomInt from '../common/utils';

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
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
  const question = selectDifficulty(difficulty);
  const correctAnswer = (isEven(question)) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const difficulty = '3';
  const rule = 'Answer "yes" if number even otherwise answer "no".';
  const gameDescription = cons(difficulty, rule);
  startGame(gameDescription, gameData);
};
