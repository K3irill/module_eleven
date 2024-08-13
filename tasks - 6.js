'use strict'

let obj = new Object();

obj.name = 'Taller';
obj.age = 20;
obj.forDelete = 'trash'

console.log(obj);

delete obj.forDelete;

console.log(obj);