// localStorage - объект, позволяющий сохранять в бразуер любую ифнормацию в виде строкого типа


// ---------------
// localStorage.setItem('String','Hello world!')    - создание нового хранилища с ключем String и значением Hello world!
// localStorage.getItem('String')                   - возвращает значение указанного ключа внутри хранилища. Если ключ не будет найден - вернет null
// localStorage.removeItem('String')                - удаление записи по ключу внутри хранилища
// localStorage.clear()                             - удаление всех записей внутри хранилища

// let btnElem = document.querySelector('button')

// btnElem.onclick = () => {
//     if(localStorage.getItem('num') === '1'){
//         localStorage.setItem('num', 0)
//     } else {
//         localStorage.setItem('num', 1)
//     }
// }

let inpElem = document.querySelector('input')
let btn1Elem = document.querySelector('#btn1')

// inpElem.onchange = () => {
//     localStorage.setItem('String', inpElem.value)
// }

btn1Elem.onclick = () => {
    localStorage.setItem('input', inpElem.value)
}

// ------------------------------
// Ex 2

let btn2Elem = document.querySelector('#btn2')

btn2Elem.onclick = () => {
    inpElem.value = localStorage.getItem('input')
}

// --------------------------------

let btn3Elem = document.querySelector('#btn3')

btn3Elem.onclick = () => {
    localStorage.removeItem('input')
}