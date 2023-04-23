let alunos = [
    {
        nomeAluno: 'Lucas',
        nota1: 10,
        nota2: 3,
        classe: 'A'
    },
    {
        nomeAluno: 'Nadia',
        nota1: 6,
        nota2: 7,
        classe: 'A'
    },
    {
        nomeAluno: 'Robson',
        nota1: 7,
        nota2: 3,
        classe: 'B'
    },
    {
        nomeAluno: 'Jair Bolsonabo',
        nota1: 4,
        nota2: 9,
        classe: 'C'
    }]

console.log('-------------------- Inicio Exercicio 1 --------------------')
//Imprimir o nome NADIA
for (var i in alunos) {
    if (alunos[i].nomeAluno == 'Nadia') {
        imprimirNomes(alunos[i].nomeAluno)

    }
}
console.log('---------------------- Fim Exercicio 1 ----------------------')

console.log('-------------------- Inicio Exercicio 2 --------------------')
//Imprimir as notas do aluno Lucas
for (var i in alunos) {

    if (alunos[i].nomeAluno == 'Lucas') {
        console.log('Nota do aluno lucas: ', alunos[i].nota1, alunos[i].nota2)
    }

}
console.log('---------------------- Fim Exercicio 2 ----------------------')


console.log('-------------------- Inicio Exercicio 3 --------------------')
//Imprimir a classe do aluno Jair Bolsonabo

for (var i in alunos) {

    if (alunos[i].nomeAluno == 'Jair Bolsonabo') {
        console.log('Classe do aluno Jair Bolsonabo: ', alunos[i].classe)
    }
}
console.log('---------------------- Fim Exercicio 3 ----------------------')

console.log('-------------------- Inicio Exercicio 4 --------------------')
//Imprimir todos alunos da classe A

for (var i in alunos) {

    if (alunos[i].classe == 'A') {
        console.log('Alunos da classe A: ', alunos[i].nomeAluno)
    }

}
console.log('---------------------- Fim Exercicio 4 ----------------------')



console.log('-------------------- Inicio Exercicio 5 --------------------')
//Imprimir status do aluno se aprovado ou reprovado (media é 5)

for (var i in alunos) {

    var media = 0
    media = calcularMedia(alunos[i].nota1, alunos[i].nota2)

    if (media >= 5) {
        console.log('O aluno ', alunos[i].nomeAluno, ' foi Aprovado')

    }
    else {
        console.log('O aluno ', alunos[i].nomeAluno, ' foi Reprovado')

    }

    console.log(media)

}
console.log('---------------------- Fim Exercicio 5 ----------------------')
// = 5 recuperacao 

for (var i in alunos) {

    var media = 0
    media = calcularMedia(alunos[i].nota1, alunos[i].nota2)


    if (media > 5) {
        console.log('O aluno ', alunos[i].nomeAluno, ' foi Aprovado')
    }
    else if (media == 5) {
        console.log('O aluno ', alunos[i].nomeAluno, ' em Recuperação')
    }
    else {
        console.log('O aluno ', alunos[i].nomeAluno, ' foi Reprovado')
    }
    
    console.log(media)
}


function imprimirNomes(nome) {
    console.log('O nome do fulano é: ', nome)
}


function calcularMedia(nota1, nota2) {

    var media = 0
    media = (nota1 + nota2) / 2

    return media
}

//Exercicio -> Criar funcao que avalia o status do aluno em cima da media dele e retorna se aprovado ou reprovado




























