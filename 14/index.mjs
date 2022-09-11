// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n es par)
// n → 3n + 1 (n es impar)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

const calcSequence = () => {
  let resultado = 0;
  let maxSequence = 0;
  let valorInicioSecuencia = 0;
  for (let i = 3; i < 1000000; i++) {
    let sumatorio = 1;
    let valorDeI = i;

    while (valorDeI != 1) {
      if (valorDeI % 2 === 0) {
        resultado = valorDeI / 2;
        sumatorio++;
        valorDeI = resultado;
      } else {
        resultado = 3 * valorDeI + 1;
        sumatorio++;
        valorDeI = resultado;
      }
    }
    if (sumatorio > maxSequence) {
      maxSequence = sumatorio;
      valorInicioSecuencia = i;
    }
  }
  console.log(`El resultado es: ${valorInicioSecuencia}, con ${maxSequence} ítems.`);
};

calcSequence();
