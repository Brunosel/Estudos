function multiplacadorPorDois(array) {
    let multiplacados = [];

    for (let i = 0, x = array.length; i < x; i++) {
        multiplacados.push(array[i] * 2);
    }

    return multiplacados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplacadorPorDois(meusNumeros);

// for in 

function forInExemplo(obj) {
    for (prop in obj) {
        console.log(prop); // nome, idade, cidade
        console.log(obj[prop]); // Joao, 20, Salvador
    }
}

const objeto = {
    nome: 'Joao',
    idade: 20,
    cidade: 'Salvador'
}

forInExemplo(objeto);

// for of

function forOfExemplo(nums) {
    for (num of nums) {
        console.log(num);
    }
}

const nums = [1, 2, 3, 4, 5, 6];