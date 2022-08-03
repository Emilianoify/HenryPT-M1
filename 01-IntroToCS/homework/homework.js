'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let dec = 0
  let suma;
  let str
  str = num.toString()
  let binarios = str.split('')
  let binariosR = binarios.reverse()
  for(let i = 0; i < binarios.length; i++){
    suma = binariosR[i] * Math.pow(2, i)
    dec = dec + suma
  }
  return dec
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