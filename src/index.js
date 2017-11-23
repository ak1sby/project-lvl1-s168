import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const greeting = (gameDescription) => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`\nGame rule: ${gameDescription}\n`);
  return userName;
};

export const loseGamePrint = (userName, userAnswer, correctAnswer) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${userName}`);
};

export const startGame = (gameDescription, gameData) => {
  const userName = greeting(cdr(gameDescription));
  const difficulty = (value) => {
    if (value !== 'default') {
      return readlineSync.question(`Select difficulty, from 1 to ${car(gameDescription)}: `);
    }
    return 'default';
  };
  const difficultyValue = difficulty(car(gameDescription));
  const iter = (round) => {
    if (round === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const curentGameData = gameData(difficultyValue);
    const question = car(curentGameData);
    console.log(`Question:${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(curentGameData);
    const isUserAnswerCorrect = userAnswer === correctAnswer;
    if (isUserAnswerCorrect) {
      console.log('Correct!');
    } else {
      return loseGamePrint(userName, userAnswer, correctAnswer);
    }
    return iter(round - 1);
  };
  return iter(3);
};
