"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null
  this.size = 0
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (valor) {

  let newValue = new Node(valor)
  if (this.head == null) {
    this.head = newValue
  } else {
    let currNode = this.head
    while (currNode.next != null) {
      currNode = currNode.next
    }
    currNode.next = newValue
  }
  this.size++
}

LinkedList.prototype.remove = function () {
  if (this.head == null) {
    return null
  }
  let currNode = this.head
  let valor;

  if (currNode.next == null) {
    valor = currNode.value
    this.head = null
    return valor
  }

  while (currNode.next !== null && currNode.next.next !== null) {
    currNode = currNode.next
  }
  valor = JSON.parse(JSON.stringify(currNode.next.value))
  currNode.next = null
  return valor

}

LinkedList.prototype.search = function (arg) {
  let currNode = this.head
  if (currNode == null) {
    return null
  }

  while (currNode !== null) {
    if (typeof arg === "function") {
      if (arg(currNode.value)) {
        return currNode.value;
      }
    } else if (currNode.value === arg) {
      return currNode.value
    }
    currNode = currNode.next
  }
  return null
}



/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];


}

HashTable.prototype.hash = function (clave) {
  let sum = 0;
  for (let i = 0; i < clave.length; i++) {
    sum += clave.charCodeAt(i);
  }
  return (sum % this.numBuckets);
}
HashTable.prototype.set = function (clave, valor) {
  if(typeof clave != "string"){
    throw new TypeError
  }
  let pos = this.hash(clave);
  if(!this.buckets[pos]){
    this.buckets[pos] = {};
  }
  this.buckets[pos][clave] = valor;
  

}
HashTable.prototype.get = function (clave) { 
  let pos = this.hash(clave);
  return this.buckets[pos][clave];
}
HashTable.prototype.hasKey = function (clave) { 
  let pos = this.hash(clave);
  return this.buckets[pos].hasOwnProperty(clave)
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
