"use strict";

function fun(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

console.log(fun(4)(4));
