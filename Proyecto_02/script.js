"use strict"
let num1, num2;
let i;
let resultado;

num1 = parseInt(prompt("Numero 1", ""));
num2 = parseInt(prompt("Numero 2", ""));

if (num1 > num2) {
    //   >
    document.write(num1 + " > " + num2);
}else{
    //  <=
    document.write(num1 + " <= " + num2);
}
