"use strict";

const count = [79, 20, 120, 21, 4, 890, 0, null];

function getOddAndEvenNumbers(arr) {
  let odd = 0;
  let even = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] !== 0 && arr[i] !== null) {
      even += 1;
    } else if (arr[i] % 2 !== 0) {
      odd += 1;
    } else zero += 1;
  }
  return `Четные ${even}, Нечетные ${odd}, Нули ${zero}`
}

console.log(getOddAndEvenNumbers(count));
