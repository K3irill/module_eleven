"use strict";

function intervalID(a, b) {
    
 let i = setInterval(() => {
    console.log(a++);
    if (a > b) clearInterval(i);
    
}, 1000)
}
intervalID(5,15)

