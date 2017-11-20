import readlineSync from 'readline-sync';

const game = () => {
  const getRandomInt = (a, b) => {
    const min = Math.ceil(a);
    const max = Math.floor(b);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const isEven = num => ((num % 2) === 0);
  let userScore = 0;
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${userName}`);
  for (let i = 0; i < 3; i++) {
    const currentRandom = getRandomInt(1, 100);
    console.log(`Question:${currentRandom}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (isEven(currentRandom)) === true ? 'yes' : 'no';
    const isUserAnswerCorrect = userAnswer === correctAnswer;
    if (isUserAnswerCorrect) {
      userScore += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${userAnswer === 'yes' ? 'no' : 'yes'}.`);
      console.log(`Let's try again, ${userName}`);
      i = 3;
    }
  }
  return console.log(`${userScore === 3 ? `Congratulations, ${userName}!` : ''}`);
};
export default game;
