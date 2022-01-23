
function carregar(){

    var res = window.prompt('qual o nome do produto?')

    var res2 = Number.parseFloat(window.prompt(`Quanto custa o ${res} que você está comprando?`))

     var res3 = Number.parseFloat(window.prompt('qual o valor você está pagando?'))

     var res4 = Number.parseFloat(window.alert(`Você comprou um ${res} que custou R$ ${res2}. Você pagou R$ ${res3} e vai receber R$ ${res3 - res2} de troco` ))

}