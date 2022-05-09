// What is the 10001st primo number?
const calcPrimeNumber = () => {
  let numeroPrimo = 0;
  let contador = 0;
  let num = 1;
  while (numeroPrimo != 10001) {
    num++;
    for (let i = 2; i < num; i++) {
      if ((num % i === 0) & (num != i)) {
        contador = 1;
        break;
      }
    }
    (contador === 1)? contador = 0: numeroPrimo++; 
  }console.log(`El resultado es: ${num}`);
};

calcPrimeNumber();

// El resultado es: 104743