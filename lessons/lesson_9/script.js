// split()

// let str = 'Hello my friend'
// let result = str.split('e') 
// console.log(result);

// let str = '102 054 194 395 023 56'
// Задача: напишите функцию checkNum(string), которая в качестве аргумента принимает строковый тип. 
// Функция должна проверить, все ли числа деляться на 2 без остатка. Если делятся - функция должна вывести в косноль 
// сообщение "Все числа делятся", в противном случае "Не все числа делятся"

// function checkNum(string){
//     let numbers = str.split(' ')
//     // numbers = numbers.map(elem => +elem)
//     for (let i = 0; i < numbers.length; i++) {
//         if(+numbers[i] % 2 != 0){
//             console.log('Not all numbers');
//             return
//         }
//     }
//     console.log('All numbers are divided');
// }

// checkNum(str)

// ----------------

// function checkNum(string){
//     let numbers = str.split(' ')
//     let filtered = numbers.filter(elem => +elem % 2 !== 0)
//     if(filtered.length != 0 ){
//         console.log('Not all numbers');
//     }
//     else {
//         console.log('All numbers are divided');
//     }
// }

// checkNum(str)

// -----------------

// function checkNum(string){
//     console.log( (string.split(' ').find(elem => +elem % 2 !== 0) ) ? 'Not all numbers' : 'All numbers are divided');
    
// }

// checkNum(str)


// let str = '102 054 194 395 023 56'

// Создайте функцию getSum(string), которая высчитывает сумму всех чисел в строке. 
// Результат должен оказаться в консоли.
// Доп * написать функцию одной строкой

// function getSum(string){
//     let numbers = string.split(' ')
//     let result = numbers.reduce((sum,elem) => sum += +elem,0)
//     console.log(result);
// }
// getSum(str)

// function getSum(string){
//     let numbers = string.split(' ').reduce((sum,elem) => sum += +elem,0)
//     console.log(numbers);
// }
// getSum(str)

// join()

// let array = [10,20,30,40]
// let result = array.join('')
// console.log(result);

// example

// let string = 'Hello my friend'

// let array = string.split(' ').map(elem => elem + '.')
// let result = array.join(' ')
// console.log(result);


//----------------
let string = '10 40 60 '

// Напишите программу, которая вернет строковый тип с квадратом каждого числого типа
// пример результата:
// '100 1600 3600'

let numbers = string.split(' ').map(elem => (+elem) ** 2)
let result = numbers.join(' ')

console.log(result);