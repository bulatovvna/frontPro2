// getter setter


// getter

// let pet = {
//     name: 'Pupsik',
//     breed: 'Pudel',

//     get nameBreed(){
//         return `${pet.name} is ${pet.breed}`
//     },

    // nameBreed(){
    //     return `${pet.name} is ${pet.breed}`
    // } 
// }
// pet.name = "Dickson"

// console.log(pet.nameBreed);
// console.log(pet.nameBreed());

// let obj  = {
//     numbers: ['one', 'two', 'three', 'four'],
//     get lastValue(){
//         return obj.numbers[obj.numbers.length - 1]
//     }
// }

// obj.numbers.push('five')
// console.log(obj.lastValue);

// let obj1 = {
//     number: 5,
//     get double(){
//         return obj1.number ** 2
//     }
// }
// obj1.number = 10
// console.log(obj1.double);

// ---------------------------------
// ---------------------------
// Задача 1

// задан объект obj. Определите новое сво-во которое будет хранить 
// разницу первого и последнего элемента массива array

// let obj = {
//     array: [10,20,30,30],

//     get minus(){
//         let first = obj.array[0]
//         let last = obj.array[obj.array.length-1]
//         return (first > last) ? first - last : last - first

        // let result = obj.array[0] - obj.array[obj.array.length-1]
        // return (result < 0) ? result *(-1) : result 
//     }
// }
// console.log(obj.minus);


// setter
// Свойтсво set (Setter, Сеттер)
// Позволяет переопределить сво-во объекта
// Особенности (почти такие же, как у getter):
// 1) Setter должен явно получить только 1 аругмент
// 2) Setter так же является сво-вом. Аргумент передается через присвоение
// 3) В сеттере указывается процесс переопределения сво-ва объекта. Внутри return не используется

// let obj  = {
//     numbers: ['one', 'two', 'three', 'four'],

//     get lastValue(){
//         return obj.numbers[obj.numbers.length - 1]
//     },

//     set setArray(arg){
//         this.numbers = arg.split(' ')
//     }
// }

// obj.setArray = '5 4 3 2 1'
// console.log(obj);

// let obj = {
//     name: 'Alex',
//     lastName: 'William',

//     set setFullName(arg){
//         let [name, lastName] = arg.split(' ')
//         obj.name = name
//         obj.lastName = lastName
//     }
// }

// obj.setFullName = 'Steven King'
// console.log(obj);

// ------------------------
// Задача 3

// Задан объект 
// Напишите сеттер, который позволит переопределить значение сво-ва phone с проверкой
// Если номер телефона будет указан без кода +7 (то есть начиная с 8), тогда необходимо будет заменить 8 на +7
// let contact = {
//     phone: '+712345678',

//     set changePhone(arg){
//         if(arg.startsWith('8')){
//             contact.phone = '+7' + arg.slice(1)
//         } else if(arg.startsWith('+7')){
//             contact.phone = arg
//         } else {
//             console.log('The number does not exist');
//         }
//     }
// }

// contact.changePhone = '123'
// console.log(contact);

// ----------------------------------

// class User{
//     constructor(name, age){
//         this.name = name,
//         this.age = age
//     }

//     get getname(){
//         return this.name + ' - name'
//     }

//     set setAge(num){
//         this.age = num ** 2
//     }
// }

// let user1 = new User('Alex',20)
// user1.setAge = 5
// console.log(user1);

// --------------------

class Card{
    #card_num = '4444 4444 4444'

    get readCard(){
        return '****'+this.#card_num.slice(5,9)+ '****'
    }
    
    set setCard(card){
        this.#card_num = card
    }
}

let card1 = new Card()
card1.setCard = '3333 3355 3333'
console.log(card1.readCard);