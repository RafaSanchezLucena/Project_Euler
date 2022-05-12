// Find the sum of all the primes below two million.

const calcPrimeNumber = () => {
  let primeNumber = true;
  let sumatorio = 0;
  for(let j = 2; j < 2000000; j++) {
    for (let i = 2; i <= Math.floor(Math.sqrt(j)); i++) {
      if ((j % i === 0)) {
        primeNumber = false;
        break;
      }
    }
    (primeNumber === false) ? primeNumber = true: sumatorio += j;
  }
  console.log(`El resultado es: ${sumatorio}`);
};

calcPrimeNumber();

// El resultado es: 142913828922
