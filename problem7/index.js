// What is the 10001st primo number?

const calcPrimeNumber = () => {
  console.time("loop");
  let numeroPrimo = 0;
  let contador = 0;
  let num = 1;
  while (numeroPrimo != 1000000) {
    num++;
    for (let i = 2; i <= num / 2; i++) {
      if ((num % i === 0)) {
        contador = 1;
        break;
      }
    }
    (contador === 1)? contador = 0: numeroPrimo++; 
  }console.log(`El resultado es: ${num}`);
  console.timeEnd("loop");
};

calcPrimeNumber();

// El resultado es: 104743 en 1.015ms
// El número primo un millón es: 