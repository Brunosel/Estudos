// Filter sintaxe 

array.filter(callback, thisArg);

// Exemplo

const frutas = ['maça fuji', 'maça verde', 'laranja', 'banana'];

frutas.filter((fruta) => fruta.includes('maça'));
// retorno: ['maça fuji', 'maça verde'];