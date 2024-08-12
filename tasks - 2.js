"use strict";

function isPrimeNum(num) {
  let result = true;
  if ((num < 2) || (num > 1000)) {
    return "Данные неверны!";
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
console.log(isPrime(5));
console.log(isPrimeNum(1001));
//--------------------------------------------------------------------
function isPrime(num) {
  let i = 2;
  let result = 0;
  if ((num < 2) || (num > 1000)) {
    return "Данные неверны!";
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
console.log(isPrime(1001));
console.log(isPrime(6));