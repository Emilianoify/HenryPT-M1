'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  let suma = 0
  num = num.split('').reverse()
 
  for(let i = 0; i < num.length; i++){
    suma = suma + num[i] * Math.pow(2, i)
  }

  return suma

}

function DecimalABinario(num) {
  // tu codigo aca

  let bin = []
  let resto = 0
  //let x = num

  while(num > 0){
    resto = num % 2
    bin.unshift(resto)
    num = num / 2
    num = Math.trunc(num)
  }

  return bin.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}