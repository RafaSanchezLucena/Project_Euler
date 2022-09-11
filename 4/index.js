// Find the largest Palindromo made from the product of two 3-digit numbers.

const encontrarPalindromo = () => {
  console.time("loop");
  let listaNumeros = [];
  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      let numero = i * j;
      listaNumeros.push(numero);
    }
  }
  const listaCadenas = listaNumeros.map((numero) => String(numero));
  let palindromo = [];
  for (let i = 0; i < listaCadenas.length; i++) {
    if (listaCadenas[i].length === 6) {
      if (
        (listaCadenas[i][0] === listaCadenas[i][5]) &
        (listaCadenas[i][1] === listaCadenas[i][4]) &
        (listaCadenas[i][2] === listaCadenas[i][3])
      )
        palindromo.push(listaCadenas[i]);
    }
  }
  let listaOrdenada = palindromo.sort();

  console.log(`El palíndromo más grande encontrado es: ${listaOrdenada.pop()}`);
  console.timeEnd("loop");
};

encontrarPalindromo();

// El resultado es: 906609