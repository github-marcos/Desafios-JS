function carregar(){
  var medida1 =  Number.parseFloat(window.prompt('Digite uma medida em metros (m)'))

  var medida2 = window.document.getElementById('h2')

  medida2.innerHTML =  ` A distância de  ${medida1} metros, corresponde a: ${medida1 / 1000}KM`

  var medida3 = window.document.getElementById('h3')
  medida3.innerHTML = ` Hectômetros (Hm): ${medida1 / 100 } <br>
  Decâmetros(Dam): ${medida1 / 10} <br>
  Decímetros(dm): ${medida1 * 10}<br>
  Centímetros(cm): ${medida1 * 100}<br>
  Milímetros(mm): ${medida1 * 1000} `
}