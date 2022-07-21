/* <div id="meu-elemento" class="classe">
    <li class="opcao">1</li>
</div> */

const meuElemento = document.getElementById('meu-elemento');

meuElemento.classList.add("novo-estilo");
// adiciona a classe 'novo-estilo'

meuElemento.classList.remove("classe");
// remove a classe 'classe'

meuElemento.classList.toggle("dark-mode");
// funciona como um interruptor, se existir retira se não existe liga
// adiciona classe 'dark-mode' caso nao exista e retira classe 'dark-mode' se ja existir 