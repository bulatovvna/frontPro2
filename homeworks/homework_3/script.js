// Задан массив goods:

let goods = [
   {id: 1, title: 'Микроволновка', price: 1500, count: 4},
   {id: 2, title: 'Телевизор', price: 2500, count: 1},
   {id: 3, title: 'Тумба', price: 5500, count: 5},
   {id: 4, title: 'Холодильник', price: 200, count: 2},
   {id: 5, title: 'Стол', price: 5600, count: 5},
   {id: 6, title: 'Телефон', price: 1900, count: 12},
   {id: 7, title: 'Компьютер', price: 4200, count: 11},
   {id: 8, title: 'Мангал', price: 250, count: 7},
   {id: 9, title: 'Люстра', price: 300, count: 3},
]


console.log('------1------');
// Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID

let filterArray = goods.filter((goods) => {
    if(goods.id % 2 === 0)
    return goods
})
console.log(filterArray);

console.log('------2------');
// Посчитайте сумму всех товаров, учитывая их количество
let sumOfGoods = goods.reduce((sum,elem) => sum += elem.price,0)
console.log(sumOfGoods);

console.log('------3------');
// Найдите значение элемента массива (продукта), цена которого будет кратна 5

let findElem = goods.find((goods) => {
    if(goods.price % 5 === 0){
        return goods
    }
})
console.log(findElem);

console.log('------4------');
// Найдите индекс элемента, count которого будет больше 11

let findIndex = goods.findIndex((goods) => {
    if(goods.count > 11){
        return goods
    }
})
console.log(findIndex);

console.log('------5------');
// Посчитайте количество элементов, count которых является нечетным числом

let sumOfOddGoods = goods.filter((goods) => (goods.count % 2 !== 0))
console.log(sumOfOddGoods.length);

console.log('------6------');
// Посчитайте количество элементов, имя которых начинается на “Т”

let sumOfElem = goods.filter ((goods) => {
    if(goods.title[0] === 'Т')
    return goods
})
console.log(sumOfElem.length);

console.log('------7------');
// Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)

let priceInSale = goods.map((goods) => goods.price * 0.65)
console.log(priceInSale);

console.log('------8------');
// Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)

let newArray = goods.slice()
newArray.map((newArray) => {
    newArray.count = 0
    return newArray
})
console.log(newArray);
console.log(goods);

console.log('--------------------------------------');

let copiedArray = JSON.parse(JSON.stringify(goods))
copiedArray.map((copiedArray) => {
    copiedArray.count = 0
    return copiedArray
})
console.log(copiedArray);
console.log(goods);
// разве goods не должен был остаться без изменении? Это же глубокое копирование

console.log('------9------');
// Отфильтруйте массив по сво-ву title

let filteredByTitle = goods.sort((a,b) => {
    return (a.title > b.title) ? 1 : -1
})
console.log(filteredByTitle);