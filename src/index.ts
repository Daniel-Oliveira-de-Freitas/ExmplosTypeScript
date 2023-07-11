// tipos de variaveis: string, boolean, number, ...
let x: number = 10;

x = 20;

console.log(x);

// existem duas maneniras de declarar as variavais no typeScript
// por inferencia e por anotation 

// inferencia
let y = 11;
y = "test";
console.log(y);



// anotation
let z: number = 12;
console.log(z);

const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const buttonSoma = document.getElementById("buttonSo") as HTMLButtonElement;
const buttonSub = document.getElementById("buttonSu") as HTMLButtonElement;
const buttonMult = document.getElementById("buttonMu") as HTMLButtonElement;
const buttonDiv = document.getElementById("buttonDi") as HTMLButtonElement;

function sum(a: number, b: number){
    return a + b;
}
function sub(a: number, b: number){
    return a - b;
}
function mult(a: number, b: number){
    return a * b;
}
function div(a: number, b: number){
    return a / b;
}


buttonSoma.addEventListener("click", function(){
    console.log(sum(Number(input1.value), Number(input2.value)));
});

buttonSub.addEventListener("click", function(){
    console.log(sub(Number(input1.value), Number(input2.value)));
});

buttonMult.addEventListener("click", function(){
    console.log(mult(Number(input1.value), Number(input2.value)));
});
