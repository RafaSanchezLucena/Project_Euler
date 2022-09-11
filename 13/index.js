// What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?

import fs from "fs";

const data = fs.readFileSync("input.txt", "utf-8").split(/\s/);

const lista = data.map(element => BigInt(element))

const sumarElementos = (lista) => {
  let valorInicial = 1;
  // El valor inicial es el primer elemento de la lista.
  // En esta ocasión, devuelve la suma de todos los elementos del array.
  let resultadoReduce = lista.reduce((a, b) => a + b);
  let resultado = resultadoReduce.toString();
  const resultadoFinal = resultado.slice(0,10);
  console.log(`El resultado es : ${resultadoFinal}`);
};

sumarElementos(lista);