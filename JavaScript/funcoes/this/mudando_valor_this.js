// Call

const pessoa = {
    nome: 'Bruno'
}

const animal = {
    nome: 'Malu'
}

function getSomething() {
    console.log(this.nome);
}

getSomething.call(animal); // Malu 
getSomething.call(pessoa); // Bruno

const numbers = {
    num1: 3,
    num2: 4
}

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b); 
}

soma.call(numbers, 2, 5); // 14

// Apply unica diferenca e que ao colocar parametro na funcao tem q colocar dentro de um array

soma.apply(numbers, [2, 5]); // 14

// bind clona a estrutura da funcao e permite passar o valor do objeto no parametro

function retornaNome() {
    return this.nome;
}

let bruno = retornaNome.bind({nome: 'Bruno'});

bruno(); // Bruno