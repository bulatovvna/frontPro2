// const numbers = [5,9,3,4,10,12,8,21,7]

// let result = numbers[0]
// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] < result){
//         result = numbers[index]
//     }
// }
// console.log(result);

// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] > result) {
//         result = numbers[index]
//     }
    
// }
// console.log(result);

// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] % 2 === 0) {
//         result = numbers[index]
//         break
//     }
    
// }
// console.log(result);

// result = 0
// for (let index = 0; index < numbers.length; index++) {
//     result += numbers[index]
// }
// console.log(result / numbers.length);

// function squared(a,b = 2){
//     return a**b
// }
// console.log(squared(5));

// function sayHello(name){
//     return `Hi, ${name}`
// }

// console.log(sayHello('gyuzal'));

// function squared(x){
//     return x*x
// }

// function callback(x,func){
//     return func(x)
// }
// console.log(callback(3,squared));

// function map(array, callback){
//     let result = []
//     for (let index = 0; index < array.length; index++) {
//         result[index] = callback(array[index])
//     }
//     return result
// }

// function double(x){
//     return x * 2
// }

// const numbers = [1,2,5,23,45]

// console.log(map(numbers,double)); 



function find(array,callback){
    let result;
    for (let index = 0; index < array.length; index++) {
        if(callback(array[index]) === true){
            result = array[index]
            break
        }
        
    }
    return result
}

const numbers = [2,5,23,45]

function first(x){
    return x % 5 === 0
}
  
console.log(find(numbers,first));