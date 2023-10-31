// Cria o array dos alunos
const alunos = [];

const alunosNotas = alunos.map(function (itemAtual) {
    itemAtual = {
        nome: itemAtual,
        nota: 0
    }
    return itemAtual;
})

// Atribui as notas incluindo os alunos
alunosNotas.push ({
    nome: 'Bruna',
    nota: 5
})
alunosNotas.push ({
    nome: 'Bruno',
    nota: 10
})
alunosNotas.push ({
    nome: 'Eder',
    nota: 8
})
alunosNotas.push ({
    nome: 'Lilian',
    nota: 7
})

console.log("Os alunos são:")
console.log(alunosNotas)

// Filtrar os alunos com a nota maior que 5
const procuraNota = alunosNotas.filter(function (item) {
    return item.nota >= 6;
})

console.log("Os alunos com nota acima de 5 são:");
console.log(procuraNota);