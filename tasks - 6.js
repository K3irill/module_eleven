'use strict'
// это не задание.
let object = new Object();

object.name = 'Taller';
object.age = 20;
object.forDelete = 'trash'

console.log(object);

delete object.forDelete;

console.log(object);

let obj = {
    key: 'value',
};

delete obj['root.submodule.item'];

console.log('123' in obj);

