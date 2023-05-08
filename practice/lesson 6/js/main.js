const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const input = document.querySelector('.input');

button.addEventListener('click', (e) => {
    // здесь нужно написать обработчик для открытия модального окна
    let text = input.value
    let textContainer = document.querySelector('.modal-content-text')
    textContainer.innerText = text
    modal.style.display = 'block' 
});

// здесь нужно написать обработчик для закрытия модального окна

modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = 'none'
    }
})







// function reverseString(str){
//     let res = str.split(' ').reverse().join(' ')
//     console.log(res);
// }

// let reverseString = function(str){
//     console.log(str.split(' ').reverse().join(' '));
// }

// let reverseString = (str) => console.log(str.split(' ').reverse().join(' '));

// reverseString('Hello my friends')

const arr = [1,2,3,4,5]

// let res = arr.map((item,index) => {
//     return item * 2 
// })

// console.log(res);

// const myMap = (array,callback) => {
//     let res = []
//     for (let index = 0; index < array.length; index++) {
//         res.push(callback(array[index]))
//     }
//     return res
// }    

// console.log(myMap(arr, item => item * 2)); 