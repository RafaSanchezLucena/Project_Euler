// Consiste en averiguar los números múltiplos de 3 y 5 menores de 1000,
// y sumarlos entre sí.

const resolver = () => {
    let sumatorio = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) sumatorio += i;
    }
    console.log(`El resultado es: ${sumatorio}`);
};

resolver();