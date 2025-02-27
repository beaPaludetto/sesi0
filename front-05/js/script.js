//obtem os elementos do DOM
const valor1 = document.getElementById("valor1")
const valor2 = document.getElementById("valor2")

//variavel resultado
const resultado = document.getElementById("resultado")

//função para limpar
function limparCampos() {
    valor1.value = ""
    valor2.value = ""
}

//função tempo
function tempo () {
    setTimeout(function() {
    resultado.innerHTML = 0
   
       }, 2000)
}

// criando função SOMA
function somar (event) {
    event.preventDefault()
    let resultadoSoma = Number(valor1.value) + Number(valor2.value)
    
    resultado.innerHTML = resultadoSoma
   
    //chamando função para limpar campos 
    limparCampos()

    //chamando função de tempo
   tempo()
}
function sub(event) {
    event.preventDefault()

    let resultadoSub = Number(valor1.value) - Number(valor2.value);

    resultado.innerHTML = resultadoSub
}

function mult(event) {
    event.preventDefault()

    let resultadoMult = Number(valor1.value) * Number(valor2.value)

    resultado.innerHTML = resultadoMult
}

function div(event) {
    event.preventDefault()

    let resultadoDiv = Number(valor1.value) / Number(valor2.value)
    resultado.innerHTML = resultadoDiv
}
