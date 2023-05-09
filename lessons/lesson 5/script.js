// let array = [10,20,30,40,50]

// array.forEach((elem) => console.log(elem))

// let result = array.filter(elem => elem > 25)
// console.log(result);

// function filter(array){
//     let newArray = []
//     for ( let elem of array){
//         if(elem > 25){
//             newArray.push(elem)
//         }
//     } 
//     return newArray
// }

// let result2 = filter(array)
// console.log(result2);

// let a = [10, 'string', true, 101,50,'10l']

// let result = a.filter(elem => typeof(elem) === 'number')
// console.log(result);

// let products =  ['Велосипед', 'Самокат', "Тренажер", "Велотренажер", "Ворота", "Ракетки"]
// let result = products.filter(elem => elem[0] === 'В')
// console.log(result);

// let number = [4,16,10,15,25,29,100]
// let result = number.filter(elem => Math.sqrt(elem) % 1 === 0)
// console.log(result);

// let prices = [100,200,300,400,500]
// let result = prices.map(elem => elem + 50)
// console.log(result);

// let names = ['Steven', 'Alex', 'Nina', 'John']

// let result = names.map(elem => elem + '.')
// console.log(result);

// let result = prices.map(elem => elem * 0.8)
// console.log(result);

// let words =  ['волесипед', 'самокат',"ролики", "ракетки"]
// let result = words.map(elem => elem[0].toUpperCase() + elem.slice(1))
// let result = words.map(elem => elem.replace(elem[0], elem[0].toUpperCase()))
// console.log(result);

// let names = ['Steven', 'Alex', 'Nina', 'nancy']

// let result = names.find(elem => elem[0] === 'N')
// console.log(result);
// let result = names.find(elem => elem[0].toUpperCase() === 'N')
// console.log(result);

// let result = names.find(elem => elem[elem.length-1] === 'a')
// console.log(result);

// let a = ['велосипед', "самокат", "ролики"]
// let result = a.findIndex((elem) => elem[0] === "с")

let result2 = a.findIndex((elem) => elem[elem.length-1] === "и")
console.log(result2);
