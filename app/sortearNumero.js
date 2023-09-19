const menorValor=1
const maiorValor=1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random()* maiorValor +1)
}

// console.log(numeroSecreto)

const elemMenorValor = document.getElementById('menor-valor')
elemMenorValor.innerHTML = menorValor

const elemMaiorValor = document.getElementById('maior-valor')
elemMaiorValor.innerHTML = maiorValor