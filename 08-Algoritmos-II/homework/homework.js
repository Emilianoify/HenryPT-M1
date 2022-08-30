'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length <= 1){
    return array
  }

  let pivot = array[0]
  let left = []
  let right = []

  for(let i = 1; i < array.length; i++){
    if(array[i] < pivot){
      left.push(array[i])
    }else{
      right.push(array[i])
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right))
  
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  return array.sort(function (a, b) { return a - b })
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
