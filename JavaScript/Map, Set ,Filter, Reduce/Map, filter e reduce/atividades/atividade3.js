// function somaValores(arr) {
//     return arr.reduce((prev, current) => prev + current);
// }

// const arr = [1, 2, 3, 4];

// console.log(somaValores(arr));


// function confereSaldo(arr, saldo) {
//     return saldo - somaValores(arr);
// }

let saldo = 100;
// const precos = [10, 25, 80, 70];

// console.log(confereSaldo(precos, saldo));

const list = [
    {
        name: 'cereal',
        price: 15
    },
    {
        name: 'sabao',
        price: 7
    },
    {
        name: 'nescau',
        price: 9
    }
]


function confereSaldo(saldo, list) {
    return list.reduce((prev, current) => prev - current.price, saldo)
}

console.log(confereSaldo(saldo, list));

