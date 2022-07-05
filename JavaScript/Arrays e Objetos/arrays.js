// SPREAD = ... separa argumentos do array oq era parte de um array se torna algo independente

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));


// REST = ... oq era algo independente se torna parte de um array

function confereTamanho(...args) {
    console.log(args.length);
}