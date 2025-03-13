function updateTime() {
    const timeDiv = document.querySelector("#time")
    const dataNew = new Date()

    const horas = String(dataNew.getHours()).padStart(2, "0")
    const minutos = String(dataNew.getMinutes()).padStart(2, "0")
    const segundos = String(dataNew.getSeconds()).padStart(2, "0")
                           
    console.log(horas)
    console.log(minutos)
    console.log(segundos)

    //impromir informações na tela
    // timeDiv.textContent = horas + ":" + minutos + ":" + segundos
    timeDiv.textContent = `${horas} : ${minutos} : ${segundos}`

    
}
setInterval(updateTime, 1000)

//chamar função
updateTime()