// closure замыкание
// function handle(){
//     return function(){
//         console.log(123);
//     }
// }
// let test = handle()
// test()


// function createName(){
//     let name = 'Steven'
//     return function(){
//         name += 'Test'
//         console.log(name);
//     }
// }
// let name1 = createName()
// name1()

// function getCounter(){
//     let counter = 0
//     return function(){
//         counter += 1
//         console.log(counter);
//     }
// }

// let count1 = getCounter()
// count1()

// function createUrl(domen){
//     return function(url){
//         console.log(`www.${url}.${domen}`);
//     }
// }
// let getCom = createUrl('com')
// getCom('google')

// let getNet = createUrl('net')
// getNet('google')

// ------------------
// excercises

// function power(n){
//     return function(num){
//        console.log(num ** n); 
//     }
// }
// let a = power(2)
// a(5)

function createPassword(pass){
    return function(checkPass){
        console.log(pass === checkPass); 
    }
}
let pass1 = createPassword(123)
pass1(123)
pass1('abc')