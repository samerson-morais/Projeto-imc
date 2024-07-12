
const calcular = document.getElementById('calcular')


function imc () {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(2)

        let classicação = ''

        if (valorIMC < 18.5){
            classicação = 'abaixo do peso.'
        }else if (valorIMC < 25) {
            classicação = 'com peso ideal. Parabéns!'
        }else if (valorIMC < 30) {
            classicação = 'levemente acima do peso'
        }else if (valorIMC < 35) {
            classicação = 'com obesidade grau I'
        }else if (valorIMC < 40) {
            classicação = 'com obesidade grau II'
        }else {
            classicação = 'com obesidade grau III. Cuidado!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classicação}`

    }else{
        resultado.textContent = 'Preencha todos os campos!!!' 
    }
}

calcular.addEventListener('click', imc)