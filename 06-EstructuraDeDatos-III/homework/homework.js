"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/


function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;

}


BinarySearchTree.prototype.insert = function (value) {

  if (value < this.value) {
    if (this.left === null) {
      let newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      let newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }

}
BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value && this.left !== null) {
    return this.left.contains(value);
  } else if (value > this.value && this.right !== null) {
    return this.right.contains(value);
  } else {
    return false;
  }
}
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  
    if(order === "pre-order"){
      cb(this.value);
      if(this.left !== null) {
        this.left.depthFirstForEach(cb,order);
      }
      if(this.right !== null){
        this.right.depthFirstForEach(cb,order);
      }
    }else if (order === "post-order"){
      if(this.left !== null) {
        this.left.depthFirstForEach(cb,order);
      }
      
      if(this.right !== null){
        this.right.depthFirstForEach(cb,order);
      }
      cb(this.value);
      
    }else{
      if(this.left !== null) {
        this.left.depthFirstForEach(cb,order);
      }
      cb(this.value);
      if(this.right !== null){
        this.right.depthFirstForEach(cb,order);
      }
      
    }

}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr = []) {
  //guarda izq
  if(this.left !== null){
    arr.push(this.left);
  }
  //guarda der
  if(this.right !== null){
    arr.push(this.right);
  }//ejecuta root
  cb(this.value)
  //revisa que arr no sea null
  if(arr.length > 0){
    arr.shift().breadthFirstForEach(cb,arr);
  }
}
BinarySearchTree.prototype.size = function () {
  if (this.value === null) {
    return 0
  }

  if (this.left === null && this.right === null) {
    return 1
  }

  if (this.left === null) {
    return 1 + this.right.size()
  }

  if (this.right === null) {
    return 1 + this.left.size()
  }

  return 1 + this.left.size() + this.right.size();

}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
