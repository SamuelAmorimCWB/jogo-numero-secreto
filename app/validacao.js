function  verificaValorValido(chute){

    const numero = +chute //converte para inteiro

    if(chuteForInvalido(numero)){
        console.log('')
        elementoChute.innerHTML += `<div>valor inválido</div:` 
        return
    }
    if(numeroMaiorMenor(numero)){
        elementoChute.innerHTML += `<div>valor invalido. o numero secreto precisar estar entre:
            ${menorValor} e ${maiorValor} </div>`
            return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h1>Você acertou</h1>
            <h3>O número secreto é ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})