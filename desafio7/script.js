var res = Number.parseFloat(window.prompt('Quanto está a cotação do dolar?'))
function carregar(){

var res2 = Number.parseFloat(window.prompt('Digite o valor em R$ que deseja converter'))

var res3 = window.document.getElementById('h2')  
res3.innerHTML = `O valor da conversão é de: R$  ${(res2 / res)}`

}