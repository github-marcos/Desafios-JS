function carregar(){
var res = window.prompt('Qual é o seu nome ?')

var res2 = Number.parseFloat(window.prompt('qual o valor do salárrio atual ?'))

var res3 = Number.parseFloat(window.prompt(`O salário de ${res} será reajustado em quantos porcento?`))
 var resf = (res2 + (res2 * (res3/ 100) ))

 var resf2 = res2 -(res2 - (res2 * (res3/ 100) )) 

var res4 = window.document.getElementById('h2')
 h2.innerHTML = `${res} receberá um aumento salarial` 

 var res5 = window.document.getElementById('h3')
 h3.innerHTML = `O salário atual era R$ ${res2}.`

 var res6 = window.document.getElementById('h4')
 h4.innerHTML = `Com o reajuste de ${res3}%, o salário vai aumentar ${resf2} no proximo mês`

var res7 = window.document.getElementById('h5')
h5.innerHTML = `E a partir daí, ${res} vai passar a receber R$ ${resf}`

}
