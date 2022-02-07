function carregar(){
var res = window.prompt('Qual o valor de a?')

var res2 = window.prompt('Qual o valor de b?')

var res3 = window.prompt('Qual o valor de c?')
  
window.document.getElementById('h2').innerHTML = 'Resolvendo Bhaskara'

window.document.getElementById('h3').innerHTML = `A equação atual é &#120607; = ${res}x<sup>2</sup> + ${res2}x + ${res3} = 0 `

window.document.getElementById('h4').innerHTML = `O calculo realizado será &#120607; = ${res2}<sup>2</sup> - 4 . ${res} . ${res3}`   


window.document.getElementById('h5').innerHTML = `O valor calculado foi &#120607; = <mark>${(res2**2) -4 *( res * res3) } </mark>`
}