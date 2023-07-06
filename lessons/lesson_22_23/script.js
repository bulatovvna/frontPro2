let divRoot = document.querySelector('#root')
let divElem = document.querySelector('.elem')

// let count = 0

// divRoot.onclick = () => {
//     console.log(count++);
// }

// let isColor = true

// divElem.onclick = () => {
//     divRoot.style.backgroundColor = (isColor) ? 'red' : 'aqua'
//     isColor = !isColor
// }

// divRoot.ondblclick = () => {
//     console.log('double');
// }

// divRoot.onclick = () => {
//     console.log('click');
// }

// ------------------------------------
// addEventListener

// divRoot.addEventListener('click', function(){
//     console.log('click');
// })

// divElem.addEventListener('dblclick', function(){
//     console.log('dblclick');
// })

// -----------------------------
// EVENT

// divElem.addEventListener('click', function(event){
//     console.log(event.offsetX);
// })


// Задание
// Используя события клавиатуры, сформируйте вывод в косноль сообщения "Привет мир!"
// Если будет нажаты клавиши shift + t (не учитывая регистр и раскладку)
// document.addEventListener('keydown', (event) => {
//     if(event.code === 'keyT'){
//         console.log('Hello World');
//     }
// })

// ---------------------------------
// target

// divRoot.addEventListener('click', (event) => {
//     event.target.remove()
// })

// example with input

// let inp = document.querySelector('.inp')

// inp.addEventListener('change', (event) => {
//     console.log(event.target.value);
// })

// ---------------------

// divRoot.addEventListener('click', function(){
//     console.log('click root');
// })

// divElem.addEventListener('click', function(e){
//     e.stopPropagation()
//     console.log('click elem');
// })

// let form = document.querySelector('form')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log('SUBMIT')
// })

// divElem.addEventListener('click', (e) => {
//     e.stopPropagation() // не переходит по ссылке
//     e.preventDefault() // не обновляет страницу
// })

// removeEventListener

// divRoot.addEventListener('click', () => {
//     console.log('click root');
// })

// divRoot.removeEventListener('click',() => {
//     console.log('click root'); 
// })

// ----------------
 
function clickHandler(){
    console.log('click root');
}

divRoot.addEventListener('click', clickHandler)
divRoot.removeEventListener('click', clickHandler)
