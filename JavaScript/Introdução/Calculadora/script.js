
function calculadora() {
    var n1 = Number(prompt('Insira o primeiro valor'));
    var n2 = Number(prompt('Insira o segundo valor'));
    var resultado;
    var operador;

    if (!n1 || !n2) {
        alert('Valores invalidos');
        calculadora()
    } 

    operador = Number(prompt('Qual operacao deseja fazer?\n1 = +\n2 = -\n3 = /\n4 = *\n5 = **'));

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
    }
    function subtrair() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
    }
    function dividir() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
    }
    function multiplicar() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
    }
    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} ** ${n2} = ${resultado}`);
        novaOperacao();
    }
    function novaOperacao() {
        var decisao = Number(prompt('Voce deseja fazer uma nova operacao?\n1 = sim\n2 = nao'));
        if (decisao === 1) {
            calculadora();
        } else {
            alert('ate a proxima!');
        }
    }

    switch (operador) {
        case 1:
            soma();
            break;
        case 2:
            subtrair();
            break;
        case 3:
            dividir();
            break;
        case 4:
            multiplicar();
            break;
        case 5:
            potenciacao();
            break;
    }

}




calculadora();