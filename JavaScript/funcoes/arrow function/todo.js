var alunos = [
    {
        nome: 'bruno',
        nota: 10,
    },
    {
        nome: 'pedro',
        nota: 6,
    },
    {
        nome: 'julia',
        nota: 9,
    },
];



function alunosAprovados(alunos) {
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        let { nota, nome } = alunos[i];
        
        if (nota >= 7) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos));