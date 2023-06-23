// let user = {
//     name: 'john',
//     username: 'done'
// }

// user.age = 30
// user['age'] = 20
// console.log(user);

// function getName(key = 'id', val = 1){
//     let data = {}
//     data[key] = val

//     return data
// }
// console.log(getName('name','john'));

// let user = {
//     0: 'Alex'
// }
// console.log(user[0]);
// console.log(user['0']);

// let name = 'Alex'
// let surname = 'Smith'

// let user = {
//     name,
//     surname,
// }
// console.log(user);

// function getUserInfo(name, age){
//     return {
//         name,
//         age
//     }
// }
// console.log(getUserInfo('David', 30));

// let user = {
//     name: "Alex",
//     address: {
//         city: 'Paris'
//     }
// }
// console.log(user.address.city);

// user.images = {
//     small: 'url',
//     big: 'url'
// }
// console.log(user);
// console.log(user.images.big);

// let user = {
//     name: "Alex",
//     surname: "Smith",
//     age: 25
// }
// delete user.age
// console.log(user);

// let newUser = user
// newUser.age = 40
// console.log(user, newUser);

// Object.assign makes copy of object with prototype

// let newUser = Object.assign({}, user)
// newUser.age = 40
// console.log(user, newUser);

// if(user.surname){
//     console.log(user.surname);
// }

// console.log(user?.surname);

// let name = user?.name || 'Default'
// console.log(name);

// if('age' in user){
//     console.log(user.age);
// }

// ----------------------------

// let btn = document.querySelector('.button')

// function showAlert(){
//     alert('ok')
// }

// btn.forEach(function(item){
//     item.addEventListener('click', showAlert)
// })

// btn.addEventListener('click',function(){
//     console.log('click 1');
// })

// btn.addEventListener('click',function(){
//     console.log('click 2');
// })

// let count = 0

// function showAlert(){
//     count++;

//     console.log('This is alert', count);

    // btn.removeEventListener('click', showAlert)
// }

// btn.addEventListener('click', showAlert,{once: true})

let elem1 = document.querySelector('.elem-1')
let elem2 = document.querySelector('.elem-2')
let elem3 = document.querySelector('.elem-3')

elem1.addEventListener('click', function(){
    console.log('click on elem-1');
})

elem2.addEventListener('click', function(){
    console.log('click on elem-2');
}, {capture: true})

elem3.addEventListener('click', function(){
    console.log('click on elem-3');

    // event.stopPropagation()
})