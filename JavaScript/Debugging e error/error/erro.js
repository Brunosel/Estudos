const meuErro = new Error('Meu primeiro erro');

meuErro.name = 'invalid message';

throw meuErro;