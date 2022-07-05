(
    function(){
        let nome = 'Bruno Seleguim';
        console.log(nome);
        return nome;
    }
)();

(
    function soma(a, b){
        return console.log(a + b);
    }
)(5, 4);
