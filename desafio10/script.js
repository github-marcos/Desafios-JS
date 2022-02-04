function carregar(){
var res = window.prompt('Qual o valor de a?')

var res2 = window.prompt('Qual o valor de b?')

var res3 = window.prompt('Qual o valor de c?')
  
window.document.getElementById('h2').innerHTML = 'Resolvendo Bhaskara'

window.document.getElementById('h3').innerHTML = `A equação atual é `

window.document.getElementById('h4').innerHTML = `O calculo realizado será `

window.document.getElementById('h5').innerHTML = `O valor calculado foi `
}