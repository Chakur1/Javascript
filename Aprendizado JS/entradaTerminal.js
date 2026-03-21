const readline = require ('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é o seu nome? ', (nome) => {
    console.log ('Olá,', nome)
    console.log('Boas vindas ao nosso sistema!\n')

    leitor.question('Qual é a sua idade? ', (idade) => {
        if (idade >= 18){
            console.log('Você é maior de idade.')
        } else{
            console.log('Você é menor de idade.')
        }
        
        
        leitor.close()
    })

    
}) 
