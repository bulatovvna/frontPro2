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
    let indexOfUser = users.findIndex(elem => elem.id)
    if(id === indexOfUser){
        users.splice(indexOfUser, 1)
    } else return 'there is not user under this id'
}
let removedArray = removeUser(1)
console.log(removedArray);