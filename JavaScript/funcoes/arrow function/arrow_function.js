// sintaxe
var helloWorld = function() {
    return 'Hello World!';
}

var helloWorld = () => {
    return 'Hello World!';
}

var helloWorld = () => 'Hello World!';


var soma = (a, b) => a + b;
soma(4, 6); // 10

// caso exista apenas um parametro pode retirar as chaves
var soma = a => a;

// arrow function nao faz HOISTING declarar sempre antes de chamala

/*    RESTRICOES 

- NAO FUNCIONA THIS

- NAO FUNCIONA ARGUMENTS

- O CONSTRUTOR (ex: MeuObjeto()) TAMBEM NAO PODE SER UTILIZADO 


*/