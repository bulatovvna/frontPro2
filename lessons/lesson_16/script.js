// Задание. 
// Напишите функцию getProducts(url), которая в качестве аргумента будет принимать ссылку
// Функция должно осуществить GET запрос к источнику. Данные необходимо вывести в косноль

// let url = 'https://api.escuelajs.co/api/v1/products/'

// function getProducts(url) {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// getProducts(url)

// Задание (б)
// Переписать функцию используя async/await

// async function getProducts(url){
//     // let url = 'https://api.escuelajs.co/api/v1/products/'
//     let res = await fetch(url)
//     let data = await res.json()
//     console.log(data);
// }
// getProducts(url)


//  POST запрос

// let url = 'https://api.escuelajs.co/api/v1/products/'

// let data = {
//     title: 'Gyuzal' ,
//     price: 10 ,
//     description: 'TEST' ,
//     categoryId: 1 ,
//     images:  ["https://placeimg.com/640/480/any"]
// }

// fetch(url, {
//     method: 'POST',
//     headers: {'Content-Type' : 'application/json'},
//     body: JSON.stringify(data)
// })

//     .then(res => res.json())
//     .then(data => console.log(data))

// ------------------------------------------------------

// Задание 2
// Напишите функию createProduct(obj), которая принимает JS объект в качестве аргумента 
// и осуществляет POST запрос с данными, которые указаны в качестве параметров функции

// let data = {
//     title: 'Gyuzal' ,
//     price: 10 ,
//     description: 'TEST' ,
//     categoryId: 10 ,
//     images:  ["https://placeimg.com/640/480/any"]
// }

// function createProduct(obj){
//     let url = 'https://api.escuelajs.co/api/v1/products/'
//     fetch(url, {
//         method: 'POST',
//         headers: {'Content-Type' : 'application/json'},
//         body: JSON.stringify(obj)
// })
// }

// function getProducts(){
//     let url = 'https://api.escuelajs.co/api/v1/products/'
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// createProduct(data)
// getProducts()

// ----------------------------------------------
// work with form

function createProduct(obj){
    let url = 'https://api.escuelajs.co/api/v1/products/'
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(obj)
})
}

let form_elem = document.querySelector('form')

form_elem.onsubmit = (event) => {
    event.preventDefault()
    let form_data = new FormData(form_elem)
    let data = Object.fromEntries(form_data)
    data.images = ["https://placeimg.com/640/480/any"]

    createProduct(data)
}

function getProducts(){
    let url = 'https://api.escuelajs.co/api/v1/products/'
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

let button = document.querySelector('button')
button.onclick = () => {
    getProducts()
}

// Задание 1. 
// Допишите к форме процесс, который будет формировать POST запрос. 
// Примчаение: перепровьте, все ли данные в форме определяется для POST запроса

// Задание 2. 
// Создайте на разметке кнопку, которая будет в косноль формировать GET запрос