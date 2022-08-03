'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  let suma = 0
  let binarios = num.split('')
  binarios = binarios.reverse()
  for(let i = 0; i < binarios.length; i++){
    suma = suma + binarios[i] * Math.pow(2, i)
  }

  return suma

}

function DecimalABinario(num) {
  // tu codigo aca

  let bin = []
  let resto = 0

  for(let i = 0;  i < 99; i++){
    
    resto = num % 2
    bin.unshift(resto)
    num = num/2
    num = Math.trunc(num)
    if(num < 1) {
      break;
    }
  }

  return bin.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}