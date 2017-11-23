import readlineSync from 'readline-sync';
import balance from '../games/balance';
import calcGame from '../games/calc';
import even from '../games/even';
import gcdGame from '../games/gcd';
import prime from '../games/prime';
import progression from '../games/progression';


export default () => {
  console.log(' \nBrain Games');
  const games = ['balance', 'calc', 'even', 'gcd', 'prime', 'progression'];
  const index = readlineSync.keyInSelect(games, 'Which game?');
  if (games.includes(games[index])) {
    console.log(`\nYou selected the ${games[index]} game\n`);
  }
  const startGame = (n) => {
    switch (n) {
      case 'balance':
        return balance();
      case 'calc':
        return calcGame();
      case 'even':
        return even();
      case 'gcd':
        return gcdGame();
      case 'prime':
        return prime();
      case 'progression':
        return progression();
      default:
        console.log('\nYou left the game. Good bye\n');
        return true;
    }
  };
  startGame(games[index]);
};
