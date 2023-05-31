let users = [ 
    {id: 1, name: 'Steven', salary: '5000'}, 
    {id: 2, name: 'Neena', salary: '10000'}, 
    {id: 3, name: 'John', salary: '4500'} 
]
    
console.log('-------1-------');
/* Функция addUser(name, salary). Функция должна добавить нового пользователя как последний элемент в массив users. 
Функция должна автоматически подобрать значение id (реализовать аналог автоинкремента)*/

function addUsers(name,salary){
    let id = users.map(elem => elem.id)

    let user = {
        id: id[id.length-1] + 1,
        name: name,
        salary: salary
    }

    users.push(user)
    return users
}
console.log(addUsers('Anna',10000));
console.log(addUsers('Maks',8000));

console.log('-------2-------');
// Функция removeUser(id). Функция должна по передаваемому в качестве аргумента ID реализовать удаление пользователя в массиве users

function removeUser(id){
    let indexOfUser = users.findIndex(elem => elem.id === id)
    if(indexOfUser !== -1){
        users.splice(indexOfUser, 1)
        return true, users
    } return false, 'There is not user under this id'
}
let removedArray = removeUser(3)
console.log(removedArray);


console.log('-----3------');
// Функция changeUser(id, name, salary). Функция должна по id найти заданный элемент и переопределить значение name и salary на значение, 
// указанные в аргументе в момент вызова

function changeUser(id, name, salary){
    let user = users.find(user => user.id === id)
    if(user){
        user.name = name
        user.salary = salary
        return true, users
    } return false, 'There is not user under this id'
}
let result = changeUser(6, 'Alex', 1500)
console.log(result);
let res = changeUser(2, 'Alex', 1500)
console.log(res);