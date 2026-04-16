var valorDigitado = parseInt(prompt("Digite um número"))
var valorAntecessor = valorDigitado - 1
 var valorSucessor = valorDigitado + 1
document.getElementById("valorAntecessor").innerHTML =`<h1>O VALOR ANTECESSOR É ${valorAntecessor} <h1>`
document.getElementById("valorDigitado").innerHTML =`<h1>O VALOR QUE VOCÊ ESCOLHEU É ${valorDigitado} <h1>`
document.getElementById("valorSucessor").innerHTML =`<h1>O VALOR SUCESSOR É ${valorSucessor} <h1>`
