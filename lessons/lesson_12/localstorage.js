// Запись обьектов в LS

// let obj = {
//     name: 'Alex',
//     salary: 1000
// }

// localStorage.setItem('user', obj)

//--------------------------
// JSON.stringify()        -- from object(string) to JSON
// JSON.parse()            -- from JSON to object

// localStorage.setItem('user', JSON.stringify(obj))
// let result = JSON.parse(localStorage.getItem('user'))
// console.log(result);c

// let password = '20-3490324'
// let login = 'ex@ex.com'

// let data = {
//     password,
//     login
// }

// localStorage.setItem('pass', JSON.stringify(data))

// let checkPass = JSON.parse(localStorage.getItem('pass')).password
// console.log(checkPass);

// ------------------------------
// let string = '[10,20,30,40,50,60]'

// Задание: добавьте в массив 2 новых элемента 
// 0 в начало, и 70 в конце. Итоговую строку выведите в косноль

// --------------------------------
// Продемонстрируйте пример записи объекта в LS и чтение его оттуда

// localStorage.setItem('string', string)
// let array = JSON.parse(localStorage.getItem('string'))

// array.unshift(0)
// array.push(70)

// let result = JSON.stringify(array)

// console.log(result);

// Задача. Опишите две функции: writeLocalStorage(obj) и readLocalStorage.
//  Функции должны записывать или считывать объекты в localStorage соответственно.

// let obj = {
//     name: 'Alex',
//     salary: 1000
// }

// function writeLocalStorage(obj) {
//     localStorage.setItem('obj', JSON.stringify(obj))
// }

// function readLocalStorage(){
//     let ObjforReading = JSON.parse(localStorage.getItem('obj'))
//     return ObjforReading
// }

// writeLocalStorage(obj)
// console.log(readLocalStorage());