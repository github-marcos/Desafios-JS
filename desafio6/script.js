function carregar(){

var res =  Number.parseFloat(window.prompt('Digite uma temperatura em °C (Celsios)'))

 res2 = window.document.getElementById('h2') 

res2.innerHTML = `A temperatura de ${res}°C, corresponde a...`

var res3 = window.document.getElementById('h3')
res3.innerHTML = (` ${res + 273,15}°K (kelvin)`)

var res4 = window.document.getElementById('h4')
res4.innerHTML = `${res * 9/5 + 32}°F (Fahrenheit)`

}
