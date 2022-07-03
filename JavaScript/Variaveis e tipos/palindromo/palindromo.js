let palavra = String(prompt('Palavra a ser verificada:'));
let tamanho = palavra.length;
let arrayi = [];
let counter = 0;

function verificar() {
    for (i = tamanho; i >= 0 ;i--) {
        arrayi[i] = palavra[i];
    }
    for (i = 0, x = tamanho; i < x;i++) {
        if (arrayi[i] === palavra[i]) {
            counter++;
        }
    }
    if (counter == tamanho) {
        alert('A palavra é um palindromo');
    } else {
        alert('A palavra não é um palindromo');
    }
}

verificar();

/* 
// solução 1
function verificaPalindromo(string) {
	if (!string) return;
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('cat');

// solução 2

function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa');
*/