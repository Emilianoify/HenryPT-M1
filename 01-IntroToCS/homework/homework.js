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

  while(num > 0){
    bin.unshift(num%2)
    num = Math.trunc(num/2)
  }

  return bin.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}