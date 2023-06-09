// 1. В программе задан массив, передающий строковые элементы. Напишите программу, 
// которая которая ответит на вопрос: присутствует ли в массиве элемент, 
// чей корень длины возвращает целое число? В качестве ответа необходимо вывести булевый тип true, false.
// Пример: ['Велосипед','Торт','Тенис,'Ракетка','Город']
// Результат: true

console.log('------1------');
const array = ['Велосипед','Торт','Тенис','Ракетка','Город']
let result = array.some((elem) => {
    let element = elem.length ** 0.5
    return (element % 2 === 0) ? true : false
})
console.log(result);

console.log('------2------');
// 2. В программе задан массив, передающий числовые элементы. Напишите программу, которая сформирует 
// новый массив из отрицательных чисел заданного массива.
// Пример: [1,2,3,-4,5,-6,7,-8,9,10]
// Результат: [-4,-6,-8]

let arrayOfNumbers = [1,2,3,-4,5,-6,7,-8,9,10]

let newNumbers = arrayOfNumbers.filter((number) => {
    if(number < 0 ){
        return number
    }
})
console.log(newNumbers);

console.log('------3-----');
// 3. В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное 
// количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их 
// итоговая сумма не превышала 50. Результат выведите в консоль. 
// Пример значений переменных: 
// let numbers = [10, 20, 33, 55, 100] 
// Пример результата: 2

let numbers = [10, 20, 33, 55, 100] 

const maxValue = 50
let sum = 0
let count = numbers.reduce((acc, elem) => {
    if(sum + elem <= maxValue){
        sum += elem
        return acc + 1
    } else return acc
},0)
console.log(count);

console.log('------4------');
// В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов, 
// которые при преобразовании в число не вернут значение NaN. Результат выведите в консоль. 
// Пример значений переменных:
// let values = ["100", "30", "Не число", "20", "Тоже не число"] 
// Пример результата: 150

let values = ["100", "30", "Не число", "20", "Тоже не число"] 
let res = values.reduce((acc, elem) => {
    let number = +elem
    return (!isNaN(number)) ? acc + number : acc
},0)
console.log(res);


console.log('------5------');
// В программе заданы два массива array_1 и array_2, элементы которого являются числами. Значения внутри одного массива уникальные.
// Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. 
// Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию. 
// Пример значений переменных: 
// let array_1 = [1, 4, 7, 8, 2] 
// let array_2 = [1, 5, 11, 6, 2]
// Пример результата: [2, 1]

let array_1 = [1, 4, 7, 8, 2] 
let array_2 = [1, 5, 11, 6, 2]

function intersection(arr1,arr2){
    let newArray = arr1.filter((elem) => arr2.includes(elem))
    newArray.sort((a, b) => b - a)
    return newArray
}
console.log(intersection(array_1, array_2));