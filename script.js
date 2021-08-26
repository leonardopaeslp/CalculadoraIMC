const nome = document.querySelector('#Nome')
const altura = document.querySelector('#Altura')
const peso = document.querySelector('#Peso')
const divResultado = document.querySelector('.resultado')
const btn = document.querySelector('#btn')

function calcular() {
  let nomeValor = nome.value
  let alturaValor = altura.value
  let pesoValor = peso.value
  if(nomeValor.length == '' || alturaValor == '' || pesoValor == ''){
    alert('Insira valores nos campos!')
    // limpar()
    // reload()
  } else if (!isNaN(nomeValor) === true) {
    alert('Insira caracteres no campo NOME!')
  } else if (!validaPeso(pesoValor)) {
    alert('Insira um peso válido')
  } else if (!validaAltura(alturaValor)) {
    alert('Insira uma altura válido')
  }
  else {
    const imc =  calcularImc(pesoValor, alturaValor)
    const arredondarIMC = imc.toFixed(2)
  
    let tabelaIMC = 0
    if (arredondarIMC < 18.5){
      tabelaIMC = 'Classificação: Magreza'
    } else if (arredondarIMC >= 18.5 && arredondarIMC <= 24.9){
      tabelaIMC = 'Classificação: Normal'
    } else if (arredondarIMC >= 25.0 && arredondarIMC <= 29.9){
      tabelaIMC = 'Classificação: Sobrepeso'
    } else if (arredondarIMC >= 30.0 && arredondarIMC <= 39.9){
      tabelaIMC = 'Classificação: Obesidade'
    } else{
      tabelaIMC = 'Classificação: Obesidade Grave'
    }
    let pResultado = document.createElement('p')
    divResultado.appendChild(pResultado)
    pResultado.innerHTML = `${nomeValor}, o calculo entre seu peso de ${pesoValor}Kg e sua altura de ${alturaValor} retornou o IMC de: ${arredondarIMC}. <span>${tabelaIMC}</span>`
    criarBtn()
    btn.disabled = true; 
  }
}

btn.addEventListener('click', calcular)


function calcularImc(peso, altura) {
  let imc = 0
  imc = peso / (altura * altura)
  return imc
}

function criarBtn() {
  const btnLimpar = document.createElement('button')
  btnLimpar.innerHTML = 'Limpar'
  btnLimpar.setAttribute('id', 'btn')
  const container = document.querySelector('.container')
  container.appendChild(btnLimpar)

  btnLimpar.addEventListener('click', () => {
    limpar()
    divResultado.children[0].remove()
    divResultado.nextElementSibling.remove()
  })
}

function limpar() {
  nomeValor = nome.value = ''
  alturaValor = altura.value = ''
  pesoValor = peso.value = ''
  reload()
}

function reload() {
  reload = location.reload()
}

function validaPeso(peso) {
  if(peso > 20 && peso < 550){
    return true
  } else
    return false
}
function validaAltura(altura){
  if (altura > 0.50 && altura < 2.70){
      return true
  } else{
      return false
  }
}