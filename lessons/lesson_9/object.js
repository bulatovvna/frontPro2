// let obj1 = {
//     name: 'Gyuzal'
// }

// let obj2 = {
//     name: 'Gyuzal'
// }
// let obj2 = obj1 // true

// console.log(obj1 == obj2); // false

// ---------------

let data = [
    {id: 1, name: 'ALex'},
    {id: 2, name: 'Steven'},
    {id: 3, name: 'Neena'}
]

let users = data.slice()

data[0].id = 10
    
console.log(data);
console.log(users);
