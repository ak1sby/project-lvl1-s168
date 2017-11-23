import readlineSync from 'readline-sync';
import balance from '../games/balance';
import calcGame from '../games/calc';
import even from '../games/even';
import gcdGame from '../games/gcd';
import prime from '../games/prime';
import progression from '../games/progression';
import exit from '../games/exit';

export default () => {
  console.log('Brain Games');
  const games = ['balance', 'calc', 'even', 'gcd', 'prime', 'progression'];
  const index = readlineSync.keyInSelect(games, 'Which game?');
  console.log(`\nYou selected the ${games[index]} game\n`);
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
        return exit();
    }
  };
  startGame(games[index]);
};
