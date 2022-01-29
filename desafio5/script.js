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


  /*var medida4 = window.document.getElementById('p')
  medida3.innerHTML = ` Decâmetros(Dam): ${medida1 * 10}`

  var medida5 = window.document.getElementById('p')
  medida3.innerHTML = ` Decímetros(dm): ${medida1 / 10}`

  var medida6 = window.document.getElementById('p')
  medida3.innerHTML = ` Centímetros(Dam): ${medida1 / 100}`

  var medida7 = window.document.getElementById('p')
  medida3.innerHTML = ` Milímetros(mm): ${medida1 / 1000}`*/
}