// 1 Напишите функцию checkString(arg), который принимает аргумент строкового типа. Функция должна вывести в консоль первую букву аргумента.

function checkString(arg){
    return arg[0]
}
console.log(checkString('Test'));

// 2 Напишите функцию checkMiddleValue(num1,num2), которая получает в качестве аргумента два числовых значения. Функция должна вернуть их среднее значение. 
// * Доп задание. доработайте функцию таким образом, чтобы выводимое значение округлялось до десятой части

function checkMiddleValue(num1, num2){
    return Math.round((num1 + num2) / 2) 
}
console.log(checkMiddleValue(15,17));
console.log(checkMiddleValue(26,41));

// 3 Напишите функцию changeValue(arg1, arg2), которая принимает два аргумента (булевый тип, число). Функция, в зависимости от первого аргумента (булевого типа) должна изменить число по следующему правилу: 
// В случае, если первый аргумент будет true, функция должна вернуть квадрат числа. В противном случае - его корень.

function changeValue(arg1, arg2) {
    return (arg1 === true) ? arg2 ** 2 : arg2 ** 0.5
}
console.log(changeValue(true,4));
console.log(changeValue(false,16));

// 4 Напишите функцию countString(arg), которая принимает в качестве аргумента строковый тип и возвращает количество букв. Функция должна игнорировать буквы: а, о, у, с
// * Доп задание. доработайте функцию таким образом, чтобы условие включало верхний и нижний регистр (А а, О о, У у, С с)

function countString(arg) {
    return arg.replace(/[аоус]/gi, '').length;

}
console.log(countString('Амазон'));

// 5 Напишите функцию createQuence(num), которая получает в качестве аргумента числовое значение. Функция должна построить последовательность строк в консоле, 
// количество которых зависит от аргумента

function createQuence(num) {
    let output = ''
    for (let index = 1; index <= num; index++) {
        output += '*'.repeat(index) + '\n'
    }
    return output
}
console.log(createQuence(3));

// ------------------ callback -------------------

// 1 Напишите функцию checkEven(array,callback), которая получает в качестве аргумента массив и колбек-функцию. Функция должна проверить, удовлетворяют ли все 
// элементы массива указанному условию колбека. Если найдется хотя бы 1 элемент, который не будет удовлетворять условию, функция должна вернуть сообщение
//  “Не все элементы удовлетворяют указанному условию”, в противном случае “Все элементы удовлетворяют указанному условию”. Колбек в качестве аргумента должен
//  передавать значение элемента.

let arr = [1,2,3,4,5]
function checkEven(array,callback){
    for (let i = 0; i < array.length; i++) {
        if(!callback(array[i])){
            return 'Не все элементы удовлетворяют указанному условию'
        }
    }
    return 'Все элементы удовлетворяют указанному условию'
}
console.log(checkEven(arr,(elem) => elem > 0));
console.log(checkEven(arr,(elem) => elem < 4));

// 2 
function checkSome(array,callback){
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])){
            return 'Минимум 1 элемент удовлетворяет указанному условию'
        }
    }
    return 'Ни один элемент не удовлетворяют указанному условию'
}
console.log(checkSome(arr, (elem) => elem === 4 ));
console.log(checkSome(arr, (elem) => elem === 6 ));