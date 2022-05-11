
// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8").split("\n");
const data = input.join("");

let lista = [];
for(let i = 0; i < data.length; i++) {
  lista.push(Number(data[i]));
};


const findDigits = (digitos) => {
  let maxProducto = 0;
  for(let i = 0; i < lista.length - digitos; i++) {
    producto = lista[i];
    for(let j = 1; j < digitos; j++) {
      producto = producto * lista[i + j];
    }
    if (producto > maxProducto) maxProducto = producto;
  }
  console.log(`El valor más alto es: ${maxProducto}`);

};

findDigits(13);

// El resultado es: 23514624000
