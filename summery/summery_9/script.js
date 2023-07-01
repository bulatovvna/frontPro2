// const user = {
//     name: 'Bob',
//     age: 27,
//     getName(){
//         return this.name;
//     }
// }

// const nextUser = {
//     name: 'John',
// }

// let nextUserName = user.getName.call(nextUser)
// console.log(nextUserName);

// const person = {
//     firstName: 'John',
//     lastName: 'Done',
//     fullName(){
//         return this.firstName + ' ' + this.lastName 
//     }
// }

// const greeting = function(message){
//     console.log(message + ',' + this.fullName());
// }
// greeting.call(person, 'hello')
// greeting.apply(person,['hey'])
// const boundGreeting = greeting.bind(person)    
// boundGreeting('hi')


// -----------------------------------

// const data = []

// setTimeout(() => {
//     data.push(
//         {
//             id: 1,
//             name: 'Alex',
//             isAdmin: true
//         },
//         {
//             id: 2,
//             name: 'Anna',
//             isAdmin: false
//         },
//         {
//             id: 3,
//             name: 'Bob',
//             isAdmin: false
//         },
//     )
// },0)

// const searchData = data.find(user => user.id === 1)
// console.log(searchData);  // undefined

// setTimeout(() => {
//     console.log(searchData.isAdmin);
// },3000)

// ---------------------------


// const data = []

// const getAllUsers = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//                 data.push(
//                     {
//                         id: 1,
//                         name: 'Alex',
//                         isAdmin: true
//                     },
//                     {
//                         id: 2,
//                         name: 'Anna',
//                         isAdmin: false
//                     },
//                     {
//                         id: 3,
//                         name: 'Bob',
//                         isAdmin: false
//                     },
//                 )
//                 resolve(data)
//             },2000)
//     })
// }

// const filterById = (id) => {
//     return new Promise((resolve, reject) => {
//         const searchData = data.find(user => user.id === id)
//         resolve(searchData)
//     })
// }

// const checkIsAdmin = (searchData) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(searchData.isAdmin){
//                 resolve(`Hello,dear ${searchData.name}`)
//             } else {
//                 reject('You dont have enough rights')
//             }
//         },3000)
//     })
// }
// // console.log(getAllUsers());

// getAllUsers()
//     .then((resolve) => {
//         console.log('resolve 1', resolve);
//         return filterById(1)
//     })
//     .then((resolve) => {
//         console.log('resolve 2',resolve);
//         return checkIsAdmin(resolve)
//     })
//     .then((resolve) => {
//         console.log('resolve 3',resolve);
//     })

const foo = () => console.log('first');
const bar = () => console.log('second');
const baz = () => console.log('third');

foo()
bar()
baz()