// fetch - позволяет осуществить http запрос, возвращает обьект  promise

// promise хранит в результате response - его необходимо декодировать с методом .json()
// Данный метод возращает еще один промис, в результате которого хр6анится данные

// let url = 'https://jsonplaceholder.typicode.com/users'

/* fetch(url)
    .then(res => {
        if(res.status === 404){
            return 'Uncorrect link'
        } else if(res.status === 200){
            return res.json()
        }
    })
    .then(data => console.log(data)) */

// --------------------------------------------------

// Задание 1
// Получите данные используя сетевой запрос 
// Выведите измененный массив, элементы которого содержат нечетное значение id.

// let url = 'https://jsonplaceholder.typicode.com/posts'
// fetch(url)
//     .then(res => res.json())
//     .then(elem => {
//         let data = elem.filter(elem => elem.id % 2 !== 0)
//         console.log(data);
//     })

// -----------------------------------------------
 // Задача 2
// Получите данные используя сетевой запрос 
// Выведите в косноль элемент массива, у которого самое большое сво-во title

let url = 'https://jsonplaceholder.typicode.com/todos'

fetch(url)
    .then(res => res.json())
    .then(data => {
        let result = data.reduce((elem, maxElem) => {
            return elem.title.length > maxElem.title.length ? elem : maxElem
        })
        console.log(result);
    })