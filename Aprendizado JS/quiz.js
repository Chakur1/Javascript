//const readline = require('readline');
//
//const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//});
//
//console.log('Bem-vindo(a) ao Quiz de JavaScript!');
//console.log('Responda com a letra correta: a, b ou c\n');
//
//let acertos = 0;
//
//rl.question('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n> ', (resposta1) => {
//   if (resposta1 == 'b') {
//        acertos++;
//    }
//        rl.question('2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n> ', (resposta2) => {
//           if (resposta2 == 'c') {
//                acertos++;
//              }
//                rl.question('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n> ', (resposta3) => {
//                    if (resposta3 == 'b'){
//                        acertos++;
//                    }
//
//                    if (acertos == 3){
//                        console.log('Parabéns, você gabaritou!')
//                    }else if (acertos == 2){
//                        console.log('Muito bem! você acertou 2 de 3, continue assim!')
//                    }else if(acertos == 1){
//                        console.log('Você acertou 1 de 3! Continue melhorando.')
//                    }else{
//                        console.log('Continue praticando e tente novamente.')
//                    }
//                        
//
//            rl.close();
//        });
//    });
//});



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log('Boas vindas ao quiz sobre os meninos do BTS!')
console.log('Responda apenas com:', '\na', '\nb', '\nc')

let acertos = 0;

rl.question('\n1) Qual o vulgo do Kim Nam-Joon \n(a)RM \n(b)Jin \n(c)J-hope\n\n', (resposta1) => {
    if (resposta1 == 'a'){
        acertos++;
    }

    rl.question('\n\n2) Qual é o vulgo do Kim Tae-Hyung? \n(a)Jung Kook \n(b)SUGA \n(c)V\n\n', (resposta2) => {
        if(resposta2 == 'c'){
            acertos++;
        }

        rl.question('\n\n3) Qual é o vulgo do Jung Ho-Seok \n(a)J-hope \n(b)Jimin \n(c)Jin\n\n', (resposta3) =>{
            if(resposta3 == 'a'){
                acertos++;
            }

        

            if(acertos == 3){
                console.log('\nVocê é um verdadeiro army!')
            }else if(acertos == 2){
                console.log('\nMuito bem! Você acertou 2 de 3, continue assim!')
            }else if(acertos == 1){
                console.log('\nVocê acertou apenas 1 questão, falta muito para ser uma army...')
            }else{
                console.log('\ncomece a ouvir o novo álbum dos meninos agora!')
            }

            rl.close()
        })
    })
});