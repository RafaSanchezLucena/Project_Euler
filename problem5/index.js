// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const numberDivisible = () => {
  let resultado = [];
  let numero = 20;
  while (numero != 0) {
    for (let i = 2; i < 20; i++) {
      if (numero % i === 0) {
        resultado.push("true");
      } else {
        resultado.push("false");
        break;
      }
    }
    let resultadoFinal = resultado.every((elemento) => elemento === "true");
    if (resultadoFinal === true) {
      console.log(`El número más pequeño es: ${numero}`);
      break;
    } else {
      resultado = [];
      numero++;
    }
  }
};

numberDivisible();

// El resultado es: 232792560
