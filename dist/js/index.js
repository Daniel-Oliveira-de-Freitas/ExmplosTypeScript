"use strict";
// tipos de variaveis: string, boolean, number, ...
let x = 10;
x = 20;
console.log(x);
// existem duas maneniras de declarar as variavais no typeScript
// por inferencia e por anotation 
// inferencia
let y = 11;
y = "test";
console.log(y);
// anotation
let z = 12;
console.log(z);
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const buttonSoma = document.getElementById("buttonSo");
const buttonSub = document.getElementById("buttonSu");
const buttonMult = document.getElementById("buttonMu");
const buttonDiv = document.getElementById("buttonDi");
function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
buttonSoma.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
buttonSub.addEventListener("click", function () {
    console.log(sub(Number(input1.value), Number(input2.value)));
});
buttonMult.addEventListener("click", function () {
    console.log(mult(Number(input1.value), Number(input2.value)));
});
