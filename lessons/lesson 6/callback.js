// callback function

// function double(){
//     return 'hello'
// }

// function handle(callback){
//     let a = callback()
//     console.log(a);
// }

// handle(double)

//--------------------------

// function handle(callback){
//     let a = callback(10)
//     console.log(a);
// }

// handle((num) => num + 20)

// задача 1
// function calc(a,b,sign){
//     if(sign === '+'){
//         console.log(a + b);
//     }
//     else if(sign === '-'){
//         console.log(a - b);
//     }
//     else if(sign === '*'){
//         console.log(a * b);
//     }
//     else if(sign === '/'){
//         console.log(a / b);
//     }
//     else {
//         console.log('Unexpected token');
//     }
// }
// calc(5,5,'*')

// function calc(callback){
//     let a = callback()
//     console.log(a);
// }
// calc(() => 5 * 5)


//-------------------
// задача 2

// function getCondition(a,b,sign){
//     if(sign === '>'){
//         console.log( (a > b) ? 'Yes' : 'No');
//     }
//     else if (sign === '<'){
//         console.log( (a < b) ? 'Yes' : 'No');
//     }
// }
// getCondition(4,9,'>')

// function getCondition(callback){
//     console.log(callback() ? 'Yes' : 'No');
//     // if(callback()){
//     //     console.log('Yes');
//     // }
//     // else {
//     //     console.log('No');
//     // }
// }

// getCondition(() => 10 < 20)
// getCondition(() => [1,2,3].includes(10))
// getCondition(() => 10 === 20)
// getCondition(() => 10 === 20 || 1 !== 0)

// -------------------------
let a = [1,2,3,4,5,6]

// a.filter((elem) => elem > 3)

function filter2(array,callback){
    let newArray = []
    for (let elem of array){
        if(callback(elem)){
            newArray.push(elem)
        }
    }
    return newArray
}

console.log(a.filter((elem) => elem > 3));
console.log(filter2(a, (elem) => elem > 3));