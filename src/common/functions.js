export const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const isEven = (num) => {
  return ((num % 2) === 0) ? true : false;
};

export const getRandomOpr = () => {
  switch (getRandomInt(1, 4)) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '/';
  }
};

export const calc = (operator, firstOperand, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return firstOperand / secondOperand;
  }
};

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};
