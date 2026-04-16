var nclientes = prompt("Numero de clientes ")
var Vcompra = prompt("qual o valor da conta?")

var valorDividido = Vcompra / nclientes 

document.getElementById("valor").innerHTML =`<h1>SUA COMPRA PARA CADA DEU ${valorDividido} <h1>`
