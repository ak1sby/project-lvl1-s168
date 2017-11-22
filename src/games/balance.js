import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../common/utils';
import { startGame } from '..';

const balance = (number) => {
  const numberStr = String(number);
  const strLength = numberStr.length;
  let sumNumber = 0;
  let result = '';
  let pureResult = '';
  for (let i = 0; i < strLength; i++) {
    sumNumber += numberStr[i] * 1;
  }
  if (sumNumber % strLength === 0) {
    const average = sumNumber / strLength;
    for (let j = strLength; j > 0; j--) { result += average; }
  }
  if (sumNumber % strLength !== 0) {
    const remainder = sumNumber % strLength;
    let curentRemainder = remainder;
    const pureNumber = sumNumber - remainder;
    const average = pureNumber / strLength;

    for (let j = strLength; j > 0; j--) {
      pureResult += average;
    }
    for (let j = strLength - 1; j >= 0; j--) {
      if (j >= remainder) { result += (pureResult[j]); } else if (j < (remainder)) {
        while (curentRemainder > 0) { curentRemainder--; }
        result += ((1 * pureResult[j]) + 1);
      }
    }
  }
  return result;
};

const gameData = () => {
  const question = getRandomInt(10, 100);
  const correctAnswer = String(balance(question));
  return cons(question, correctAnswer);
};

export default () => {
  const gameDescription = 'Balance the given number.';
  startGame(gameDescription, gameData);
};
