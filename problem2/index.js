// Consiste en calcular todos los número pares de una lista de Fibonacci menores de 4000000
// y sumarlos entre ellos.

const resolver = () => {
  numAnterior = 2;
  numPosterior = 3;
  let sumatorio = 2;
  while (numPosterior <= 4000000) {
    let suma = numAnterior + numPosterior;
    if (suma % 2 === 0) sumatorio += suma;
    numAnterior = numPosterior;
    numPosterior = suma;
  }
  console.log(`El resultado es: ${sumatorio}`);
};

resolver();
