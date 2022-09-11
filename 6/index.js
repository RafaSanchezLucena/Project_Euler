// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const calcSquares = (num) => {
  let sumatorioSum = 0;
  let sumatorio = 0;
  for (let i = 1; i < num + 1; i++) {
    sumatorioSum += i * i;
    sumatorio += i;
  }
  let sumatorioSquare = sumatorio * sumatorio;
  let result = sumatorioSquare - sumatorioSum;
  console.log(`El resultado es: ${result}`);
};

calcSquares(100);

// El resultado es: 25164150
