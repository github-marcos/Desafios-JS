function carregar(){
  var res = window.prompt('Qual é o produto que você está comprando?')

   var res2 = Number.parseFloat(window.prompt('Qual é o valor do produto?'))

   var conta = res2 * 10 / 100
 
 var res3 = window.document.getElementById('h1')
res3.innerHTML = `calculando desconto de 10% para ${res}`

var res4 = window.document.getElementById('h2')
res4.innerHTML = `o preço original era R$ ${res2}`

var res5 = window.document.getElementById('h3')
res5.innerHTML = `Você acaba de ganhar R$ ${conta} de desconto.`
 
var res6 = window.document.getElementById('h4')
res6.innerHTML = `No fim você vai pagar R$ ${res2 - conta } de desconto (-10%).`

}
