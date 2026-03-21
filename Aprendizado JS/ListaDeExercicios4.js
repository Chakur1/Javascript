//exercicio 1 - Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.
function saudacao() {
    console.log('Olá! Seja bem-vindo(a)!')
}

saudacao()


//exercicio 2 - Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."

function apresentarPessoa(nome, idade) {
    console.log('Olá, meu nome é ' +nome+ ' e tenho ' +idade+ ' anos.')
}

apresentarPessoa('Pedro', '19')

//exercicio 3 - Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura. A função deve calcular o IMC utilizando a fórmula: IMC = peso / (altura * altura) A função deve retornar o valor do IMC. Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.
function calcularIMC(peso, altura) {
    return peso/(altura*altura)
}
const IMC = calcularIMC(70, 1.80)
console.log('O seu IMC é: '+IMC)


//exercicio 4 - Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.
function verificarAprovacao(nota) {
    if(nota>=7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
}

verificarAprovacao(9)

//exercicio 5 - Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.
function ehPar(numero) {
    if (numero %2 == 0){
        console.log('Esse número é par!')
    }else{
        console.log('Esse número é impar!')
    }
}

ehPar(8)

//exercicio 6 - Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.
function soma(numeroUm, numeroDois) {
    return numeroUm + numeroDois
}
console.log(soma(4, 4))

//exercicio 7 - Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco. A função deve receber dois parâmetros: valorCompra e valorPago. A função deve: calcular o valor do troco retornar o valor calculado Depois, utilize o retorno da função para exibir o valor do troco no console. function calcularTroco(valorCompra, valorPago) {    return valorPago - valorCompra }

const valorTroco = calcularTroco(30, 47)
console.log('O valor do troco da sua compra é R$', valorTroco)

//exercicio 8 - Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.

const soma = (numeroUm, numeroDois) => numeroUm + numeroDois
console.log(soma(4, 8))

//exercicio 9 - Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".
function executarAcao(acao) { 

acao(); 

} 

executarAcao(function() { 

console.log("Executando ação!"); 

});

//exercicio 10 - Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).
function fazerPergunta(pergunta, respostaCorreta) { 

let respostaUsuario = respostaCorreta; 

if (respostaUsuario === respostaCorreta) { 

console.log("Resposta correta!"); 

} else { 

console.log("Resposta errada!"); 

} 

} 

fazerPergunta("Qual é a capital do Brasil?", "Brasília");
