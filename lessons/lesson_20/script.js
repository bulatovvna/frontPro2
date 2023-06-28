// Contects this

// class User {
//     constructor(name){
//         this.name = name
//     }
// }

// let user1 = new User('Alex')
// user1.name

// let pet1 = {
//     name: 'Sharik',

//     getName(){
//         console.log(this.name);
//     }
    
// }
// pet1.getName()

// -------------------
// prototype + this

// Array.prototype.double = function(){
//     return this.map(elem => elem ** 2)
// }
// console.log(numbers.double());

// let user = {
//     name: 'Alex',
//     age: 30,

//     getAge: function(){
//         console.log(this.age);
//     }
// }
// user.getAge()


// methods of function (bind, call, apply)

// let car = {
//     model: 'Tesla',
//     color: 'red',
//     milage: 1000
// }

// let getKm = function(){
//     console.log(this.milage * 1.5);
// }

// getKm.bind(car)
// console.log(car);

function hello(){
    console.log('Hello', this);
}

const person = {
    name: 'Alex',
    age: 25,
    sayHello: hello,
    // sayHelloWindow: hello.bind(window),
    logInfo: function(job, phone){
        console.group(`${this.name} info:`)
        console.log(`name is ${this.name}`);
        console.log(`age is ${this.age}`);
        console.log(`job is ${job}`);
        console.log(`phone is ${phone}`);
        console.groupEnd()
    }
}
// person.logInfo('IT',123)

const lena = {
    name: 'Elena',
    age: 23
}

// person.logInfo.bind(lena)()

// const fnLenaInfoLog = person.logInfo.bind(lena)
// fnLenaInfoLog('Frontend', 123)

// bind возвращает новую функцию
// person.logInfo.bind(lena, 'Frontend', 123)() 

// Метод call делает тоже самое, что и bind, только сразу же вызывает саму функцию
// когда как bind просто возвращает новую функцию
// person.logInfo.call(lena, 'Frontend', 123)

// Метод apply делает тоже самое что и метод call. 
// Основное отличие заключается в том, что аргументы самой функции передаются внутри массива.
// person.logInfo.apply(lena,['Frontend', 123])

// ---------------------------

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n){
//     return arr.map(function(i){
//         return i * n
//     })
// }


Array.prototype.multBy = function(n){
    return this.map(function(i){
        return i * n
    })
}
console.log(array.multBy(2));
// array.multBy(2)