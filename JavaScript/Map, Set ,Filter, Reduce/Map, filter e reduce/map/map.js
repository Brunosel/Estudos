// MAP

array.map(callback, thisArg);

callback(item, index, array);

// callback: função a ser executada em cada elemento
// thisArg: opcional valor de 'this' dentro da função callback

// Usando MAP

const numbers = [1, 2, 3 , 4, 5, 6];

numbers.map((item) => item * 2); // retorno: [2, 4, 6, 8, 10, 12]

// USANDO FOR EACH

const numbersForEach = [1, 2, 3 , 4, 5, 6];

numbers.forEach((item) => item * 2); // retorno : undefined necessario array auxiliar
