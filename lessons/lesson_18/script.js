// Static method

// class Car{
//     constructor(model,year,speed){
//         this.model = model
//         this.year = year
//         this.speed = 0
//     }

//     driving(speed){
//         let lastSpeed = this.speed
//         this.speed = speed
//         console.log(`${this.model} goes with speed ${this.speed}`);
//         return lastSpeed
//     }
// }

// let car1 = new Car('Tesla', 2020)

// console.log(car1.driving(100));
// console.log(car1.driving(50));


// -----------------------
// Static property

// class Route{
//     constructor(name){
//         this.name = name
//     }

    // Static property
    // static job = 'IT_prog'

    // Static method
//     static sayHi(){
//         console.log('Hello');
//     }
// }

// let ex = new Route('Alex')
// let ex1 = new Route('Steven')
// console.log(ex);
// console.log(ex1);

// ex1.sayHi()     ex1.sayHi() is not a function
// Route.sayHi()   Hello

// -----------------------

// class Browser{
//     constructor(name){
//         this.name = name
//     }
// }

// class Counter{
//     constructor(){
//         this.count = 0
//     }

//     getEx(name){
//         this.count++
//         return new Browser(name)
//     }
// }

// let count1 = new Counter()
// count1.getEx('Chrome')
// console.log(count1);

// Object.values(obj)
// Object.keys(obj)
// Object.entries(obj)

// let obj = {
//     name: 'Alex',
//     age: 50
// }

// console.log(Object.entries(obj));


// --------------
// Задание 1
// Расчитайте сумму всех значений свойств указанного объекта

// let obj = {
//     num1: 100,
//     num2: 300,
//     num3: 500,
//     num4: 800,
//     num5: 1400,
// }
// let result = Object.values(obj).reduce((acc, elem) => acc += elem, 0)
// console.log(result);

// for(let elem in obj){
//     console.log(elem, obj[elem]);
//     // elem - key
//     // obj[elem] - value
// }


// ------------------------
// let arr = [10,20,30,40]

// for(let elem of arr){ // value
//     console.log(elem);
// }

// for(let elem in arr){ // key
//     console.log(elem);
// }

// ----------------------------
// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат  согласно примеру:
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }
// Примечание: Использовать класс Object нельзя

// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]

// let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
// }

// let arr = []
// function getEntries(obj){
//     for(let elem in obj){
//         arr.push([elem, obj[elem]])
//     }
//     return arr
// }
// console.log(getEntries(someObj));

// ------------------------
// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива
 
// Пример: [1,true,'3','value1',9,'key']

//  Результат: 
//  {
// key1: 1,
// key2: true,
// key3: ‘3’,
// key4: ‘value1’
// key5: 9,
// key6: ‘key’
// }

// let arr =  [1,true,'3','value1',9,'key']
// let obj = {}

// function a(){
//     for(let i in arr){
//         obj[`key${+i+1}`] = arr[i]
//     }
//     return obj
// }
// console.log(a(arr));

// ----------------------
// Object.assing()

let obj1 = {
    name: 'Alex'
}

let obj2 = {
    age: 20,
    salary: 4500
}

let result = Object.assign(obj1, obj2)
console.log(typeof result);
console.log(result);
console.log(obj1);
console.log(obj2);