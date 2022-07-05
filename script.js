// Constantes que direcionam para o id do arquivo html, cada um deles é um ponteiro dentro do svg.
const PONTEIROHORA = document.querySelector('#hour')
const PONTEIROMINUTO = document.querySelector('#minute')
const PONTEIROSEGUNDO = document.querySelector('#second')

// Quando o script é carregado pela primeira vez no navegador ele pega a data e hora atual e define as posições dos ponteiros:
var data = new Date()
console.log(data)

let hr = data.getHours()
let min = data.getMinutes()
let seg = data.getSeconds()
console.log('Hora: ' + hr + ' Minuto: ' + min + ' Segundo: ' + seg)

let posicaoHr = (hr * 360) / 12 + (min * (360 / 60)) / 12
let posicaoMin = (min * 360) / 60 + (seg * (360 / 60)) / 60
let posicaoSeg = (seg * 360) / 60

function executarRelogio() {
  // Pega o valor atual(Ex:posicaoSeg) e adiciona o numero de graus necessários para exibir um segundo adicional. Para aumentar gradualmente as posições dos ponteiros:
  
  posicaoHr = posicaoHr+(30/3600); // 1/3600*30(graus) é uma hora adicional, ou seja move 30graus de(*) 360 em(/) 3600 segundos, ou seja 30graus por hora(3600segundos)
  posicaoMin = posicaoMin+(6/60); // 1/60*6(graus) é um minuto adicional, ou seja move 6graus de 360 em 60 segundos, ou seja 6graus por min(60segundos)
  posicaoSeg = posicaoSeg+6; //6 graus é um segundo adicional

  // Utilizando os numeros como graus embutidos, para transforma-los cada um em um objeto.
  // Aplicando transform ao estilos da constante com uma rotação dos lets em graus.
  PONTEIROHORA.style.transform = 'rotate(' + posicaoHr + 'deg)';
  PONTEIROMINUTO.style.transform = 'rotate(' + posicaoMin + 'deg)';
  PONTEIROSEGUNDO.style.transform = 'rotate(' + posicaoSeg + 'deg)';
}

// Método setInterval chama uma função ou executa um trecho de código repetidamente com atraso de tempo fixo em cada chamada.
var intervalo = setInterval(executarRelogio, 1000);
