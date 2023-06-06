// асинхронный код

/* setTimeout(() => { // задержка в мс
    console.log(1);
},5000)
console.log(2);
console.log(3);*/ 


// Promise
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(1);
//         let a  = 'Gyuzal'
//         resolve()
//     }, 500)
// })
// console.log(promise);

// method then - code works after when promise will be 'resolve'

// promise.then(() => {
// return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//             console.log(1);
//         }, 500)
//     })
// })

// catch - works when resolve will be reject

/* let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Pending...');
        let data = [1, 2, 3, 4]
        resolve(data)
        // reject('ERROR!')
    }, 1000)
})

promise
    .then((data) => {
        data.push(5)
        console.log('Done');
        return data
    })
    .then((data) => {
        console.log(data);
        return data
    })
    .catch((e) => {
        console.log('Not done', e);
    })
    .finally(() => {
        console.log('finally!');
    }) */

// finally - method,that works in any case (resolve or reject)

// ----------------------------

//Promise.all() - method, which waits for all the codes will be done

let promises = Promise.all([
    new Promise((resolve,reject) => setTimeout(() => resolve('One', 1000))),
    new Promise((resolve,reject) => setTimeout(() => resolve('Two', 2000))),
    new Promise((resolve,reject) => setTimeout(() => reject('Three', 3000)))
])

promises
    .then((a) => {
        console.log(a);
    })
    .catch((e) => {
        console.log(e);
    })