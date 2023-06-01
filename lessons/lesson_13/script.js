// асинхронный код

/* setTimeout(() => { // задержка в мс
    console.log(1);
},5000)
console.log(2);
console.log(3);*/ 


// Promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        let a  = 'Gyuzal'
        resolve()
    }, 500)
})
// console.log(promise);

// method then - code works after when promise will be 'resolve'

promise.then(() => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
        }, 500)
    })
})