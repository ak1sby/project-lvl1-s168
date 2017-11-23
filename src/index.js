import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const greeting = (gameDescription) => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`\nGames rule: ${gameDescription}\n`);
  return userName;
};

export const loseGamePrint = (userName, userAnswer, correctAnswer) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${userName}`);
};

export const startGame = (gameDescription, gameData) => {
  let userScore = 0;
  const userName = greeting(gameDescription);
  const difficulty = readlineSync.question('Select difficulty, from 1 to 3: ');
  for (let i = 0; i < 3; i += 1) {
    const curentGameData = gameData(difficulty);
    const question = car(curentGameData);
    console.log(`Question:${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(curentGameData);
    const isUserAnswerCorrect = userAnswer === correctAnswer;
    if (isUserAnswerCorrect) {
      userScore += 1;
      console.log('Correct!');
    } else {
      loseGamePrint(userName, userAnswer, correctAnswer);
      return;
    }
  }
  if (userScore === 3) console.log(`Congratulations, ${userName}!`);
};
