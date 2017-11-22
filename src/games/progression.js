import { cons } from 'hexlet-pairs';
import { startGame } from '..';

const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

const progression = (initialTerm, commonDifference) => {
  let curentProgressionElement = initialTerm;
  let result = '';
  for (let i = 0; i < 9; i++) {
    curentProgressionElement += commonDifference;
    result += ` ${curentProgressionElement}`;
    if (i === 4) {
      result += ' ' + '..';
      curentProgressionElement += commonDifference;
    }
  }
  return result;
};

const gameData = () => {
  const initialTerm = getRandomInt(0, 20);
  const commonDifference = getRandomInt(2, 4);
  const question = progression(initialTerm, commonDifference);
  const correctAnswer = String(initialTerm + (6 * commonDifference));
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'What number is missing in this progression?';
  startGame(gameDescription, gameData);
};
