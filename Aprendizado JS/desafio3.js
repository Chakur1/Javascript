//contar quantos numeros pares e quantos numero imapares tem entre 0 a 100

let totalNumerosPares = 0
let totalNumerosImpares = 0

//laço de repetição

//minha tentativa:
//for (let totalNumerosPares = 0; totalNumerosPares <=100; totalNumerosPares++){
//    if (totalNumerosPares % 2 == 0){
//        console.log('Total de Números Pares:', totalNumerosPares)
//    }
//}
//
//for (let totalNumerosImpares = 0; totalNumerosImpares <=100; totalNumerosImpares++){
//    if (totalNumerosImpares % 2 > 0){
//        console.log('Total de Números Ímpares:', totalNumerosImpares)
//    }
//}

//modo ensinado:
for (let contador = 0; contador <=100; contador++) {
    if(contador % 2 == 0){
        totalNumerosPares++
    }else{
        totalNumerosImpares++
    }
}

console.log('Números Pares:', totalNumerosPares)
console.log('Números Impares:', totalNumerosImpares)