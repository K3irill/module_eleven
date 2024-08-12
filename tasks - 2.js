"use strict";

function getPrimeNum(num) {
  let result = true;
  if (num > 1000) {
    return "Данные не верны!";
  } else {
    for (let i = 2; i <= num - 1; i++) {
      if (num % i == 0) {
        result = false;
        break;
      } else result = true;
    }
    if (result === true) {
      return `${num} - простое число`;
    } else return `${num} - НЕ простое число`;
  }
}
console.log(getPrime(5));
console.log(getPrimeNum(1001));
//--------------------------------------------------------------------
function getPrime(num) {
  let i = 2;
  let result = 0;
  if (num > 1000) {
    return "Данные не верны!";
  } else {
    while (i < num + 1) {
      if (num % i !== 0) i++;
      else {
        if (i == num) result = true;
        else result = false;
        i = num + 2;
      }
    }
    if (result === true) {
      return `${num} - простое число`;
    } else return `${num} - НЕ простое число`;
  }
}
console.log(getPrime(1001));
console.log(getPrime(6));