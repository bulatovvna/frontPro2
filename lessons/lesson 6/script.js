// function declaration

// function double(num){
//     return num ** 2
// }
// console.log(double(4));

// --------------------------
//function expession

// anonym function
// let double = function(num){
//     return num ** 2
// }
// console.log(double(4));

// стрелочная функция
// let double = (num) => num ** 2
// console.log(double(4)); 

// let double = (num) => {
//     return num ** 2
// }

// Задача 1
// function getLastFirstChar(string){
//     return string[0] + string[string.length-1] 
// }

// let getLastFirstChar = function(string){
//     return string[0] + string[string.length-1] 
// }

// let getLastFirstChar = (string) => string[0] + string[string.length-1]

// console.log(getLastFirstChar('Hello')); 

// Задача 2
// function getAvg(num1,num2){
//     return (num1 + num2)/2
// }

// let getAvg = function(num1,num2){
//     return (num1 + num2)/2
// }

// let getAvg = (num1,num2) => (num1 + num2)/2

// console.log(getAvg(5,7));

// call anonym function without name
// (function(){
//     console.log(123);
// })()

// (() => console.log(333))()

// --------------------------
// тернарный оператор

// let a = (condition) ? value1 : value2
// let b = 5
// let a = (b > 6) ? 10 : 50
// console.log(a);