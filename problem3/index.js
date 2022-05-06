// ¿Cuál es el mayor factor primo del número 600851475143?

const factorPrimo = () => {
  let numeroPrimo = 0;
    let numero = 600851475143;
  for (let i = 2; i < numero / 2; i++) {
    if (numero % i === 0) {
      let resultadoDivision = numero / i;
      numeroPrimo = i;
      numero = resultadoDivision;
    }
  }
  console.log(`El factor primo más alto es: ${numero}`);
};

factorPrimo();
