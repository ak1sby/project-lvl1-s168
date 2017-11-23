import { cons } from 'hexlet-pairs';
import { startGame } from '..';
import getRandomInt from '../common/utils';

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
  const difficulty = '2';
  const rule = 'Find the greatest common divisor of given numbers.';
  const gameDescription = cons(difficulty, rule);
  startGame(gameDescription, gameData);
};
