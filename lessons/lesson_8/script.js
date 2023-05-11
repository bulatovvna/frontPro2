// sort
// let a = [10,4,5,6,1,2,3,9,8,7]

// a.sort((crElem, nxElem) => {
//     if(crElem > nxElem) return 1
//     if(crElem < nxElem) return -1
//     if(crElem == nxElem) return 0
// })

// a.sort((crElem, nxElem) => crElem - nxElem)
// console.log(a);

// let employees = [
//     {id: 4, name: 'Steven'},
//     {id: 2, name: 'Neena'},
//     {id: 1, name: 'John'},
//     {id: 3, name: 'King'}
// ]
// employees.sort((crElem, nxElem) => crElem.id - nxElem.id)
// console.log(employees);

// let employees = [
//     {id: 4, name: 'Steven'},
//     {id: 2, name: 'Neena'},
//     {id: 1, name: 'Johnie'},
//     {id: 3, name: 'Kingsman'},
//     {id: 5, name: 'Anna'},
// ]

// employees.sort((crElem, nxElem) => {
//     if(crElem.name.length > nxElem.name.length) return 1
//     if(crElem.name.length < nxElem.name.length) return -1
//     if(crElem.name.length === nxElem.name.length) return 0
// })

// employees.sort((crElem, nxElem) => crElem.name.length - nxElem.name.length)
// console.log(employees);


// reduce

let a = [10,50,30,40,50,10]

// this is normal way
// let b = 0
// for (let i = 0; i < a.length; i++) {
//     b += a[i]
// }
// console.log(b);

//this one with reduce(better)

// let result = a.reduce((sum,elem) => sum + elem) 
// console.log(result);

let goods = [
    {id: 1, title: 'велосипед', price: 500},
    {id: 2, title: 'самокат', price: 200},
    {id: 3, title: 'ролики', price: 300},
    {id: 4, title: 'ракетки', price: 900},
]

// let sum = 0
// for (let i = 0; i < goods.length; i++) {
//     sum += goods[i].price
// }
// console.log(sum);

// let result = goods.reduce((sum, elem) => sum += elem.price, 0)
// console.log(result);

// let result = goods.reduce((sum, elem) => sum += elem.price / goods.length, 0)
// console.log(result);

let result = goods.reduce((sum, elem) => (elem.title[0] === 'р') ? sum + elem.price : sum, 0 )
console.log(result);