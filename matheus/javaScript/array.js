let frutas = ["maçã", "morango", "melancia", "Laranja", "banana"]

console.log(frutas)

console.log(frutas[2])

for(let i = 0; i < frutas.length; i ++){
    console.log(frutas[i])
}

for(let i = 0; i < 10; i++ ){
    console.log(`${i} x 2 = `, i * 2)
}
// 1. MAP - transformando cada elemento em array
//Exemplo: o triplo do array original
let numeros = [10, 50, 30, 20, 60]
console.log("numeros originais", numeros)
let numerosMaisUm = numeros.map(n => n * 3)
console.log("numeros mais um", numerosMaisUm)


//2. FIND - enocotrar o primeiro elemento que corresponde a condição
// exemplo: encontrar a primeira fruta que começa com M 
let primeiroElementoQueComecacomM = frutas.find(fruta => fruta.startsWith("m"))
console.log(primeiroElementoQueComecacomM)

//3. FILTER - cria uma nova  lista com os valores que corresponde a condição 
//Exemplo: filtrar numeros menor que 50
let numerosMenoresQue50 = numeros.filter(n => n < 50)
console.log(numerosMenoresQue50);

//4. INCLUDES - verifica se um elemento existe
//Eemplo: Verifica se uva existe no array de frutas
let temUva = frutas.includes("Uva")
console.log(temUva)

let temLaranja = frutas.includes("Laranja")
console.log(temLaranja)

//5. SOME - Verificar se pelo menos um elemento existe no array
//Exemplo: verifica se existe pelo menos um numero maior que 50
let temNumeroMaiorQue50 = numeros.some(n => n > 50)
console.log(temNumeroMaiorQue50)

//6. EVERY - Verifica se todos os elementos atemndem a codição
let todosOsNumerosSao10 = numeros.every (n => n == 10)
console.log(todosOsNumerosSao10)

//exercicio

//1
let numeross = [1, 2, 3, 4 , 5]
console.log("numeros originais", numeross)
let dobroNumero = numeross.map(n => n * 2)
console.log("dobro do numero", dobroNumero)

//2
let numerosss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
let numerosMaioresque5 = numerosss.filter(n => n > 5)
console.log(numerosMaioresque5)

//3 
let numerossss = [10, 25, 47, 58, 62, 79]
let numerosMaiorQue50 = numerossss.find(n => n > 50)
console.log(numerosMaiorQue50)

//4
let numerosssss = [10, -5, 7, 0, -3]
let temNumeroNegativo = numerosssss.some(n => n < 0)
console.log(temNumeroNegativo)

//5
 let numerossssss = [1,2,3,4,5]
let todosMaioresQue2 = numerossssss.every(n => n > 2)
console.log(todosMaioresQue2)

6//
let numerosssssss = [1,3,5,7,9,10]
let tem7 = numerosssssss.includes(7)
console.log(tem7)
