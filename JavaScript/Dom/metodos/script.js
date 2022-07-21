const titulo = document.getElementById('titulo');
/* 
<h1 id="titulo"></h1> 
*/

const texto = document.getElementsByClassName('textos');
/*[ 
<section class="textos"></section> 
]*/

const script = document.getElementsByTagName('script');
/*[ 
<script src=""></script> 
]*/

const ambasClasses = document.querySelectorAll('primeira-classe segunda-classe');
/*[ 
<div class="primeira-classe segunda-classe">
    <li class="opcao">1</li>
    <li class="opcao">2</li>
    <li class="opcao">3</li>
</div>
]*/

const classe_tag = document.querySelectorAll('li opcao');
/*[ 
<li class="opcao">1</li>
<li class="opcao">2</li>
<li class="opcao">3</li> 
]*/

// cria novo elemento html
document.createElement();

// remove elemento filho de elemento 
document.removeChild();

// cria elemento filho dentro de elemento
document.appendChild();

// substitui elemento filhos
document.replaceChild();