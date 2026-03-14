const nome = 'Pedro'

if (nome) {
    console.log('Olá, ' + nome)
} else {
    console.log('Ainda não sei seu nome.')
}

const idade = null

if (idade != null) {
    if (idade >= 18) {
        console.log('Maior de idade.')
    } else if (idade != null && idade < 18) {
        console.log('Menor de idade.')
    }

}