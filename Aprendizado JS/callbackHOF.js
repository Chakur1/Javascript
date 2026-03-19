//HOF -> Higher-Order-Function === função que recebe outra função como parâmetro

function calcular(numero1, numero2, operacao){

    return operacao (numero1, numero2)

}

function soma(numero1, numero2) {
    return numero1 + numero2
}

function divisao(numero1, numero2){
    return numero1 / numero2
}

const resultadoDaSoma = calcular(3, 8, soma)
console.log('Resultado da soma:', resultadoDaSoma)


const resultadoDaDivisao = calcular(8, 4, divisao)
console.log('Resultado da soma:', resultadoDaDivisao)