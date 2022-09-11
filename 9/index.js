// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const findTriplet = () => {
  producto = 0;
  for(let a = 1; a < 1000; a++) {
    for(let b = 1; b < 1000; b++) {
      for(let c = 1; c < 1000; c++) {
        if(a * a + b * b === c * c & a + b + c === 1000) {
          producto = a * b * c;
          console.log(`El producto de ${a}*${b}*${c} es: ${producto}`);
          break;
        }
      }
    }
  }
}

findTriplet();

// El producto de 375*200*425 es: 31875000