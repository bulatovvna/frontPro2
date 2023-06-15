const store = {

}

let inputElement = document.querySelectorAll('.inputElement')

for (let i = 0; i < inputElement.length; i++) {
    inputElement[i].onkeyup = function(event){
        store[event.target.name] = event.target.value
    }
    
}

function save(){
    console.log(store);
}

const car2 = {
    name: 'Mercedes',
    model: 'GLE 450',
    year: 2022,
    getCarInfo: function(){
        document.write(`<h1> This is Mercedes GLE 450 </h1>`)
    }
}
car2.getCarInfo()

function Car(name, model, year){
    let temp = {}

    temp.name = name
    temp.model = model
    temp.year = year

    temp.getCarYear = function(){
        document.write(`<h1> This is ${this.name} ${this.model}  </h1>`)
    }
    return temp
}

function Person(username, surname, age){
    this.username = username
    this.surname = surname
    this.age = age

    this.getUserInfo = function(){
        document.write(`<h1> Username: ${this.username}, <br> Surname: ${this.surname}, <br> Age: ${this.age}  </h1>`)
    }
}

// let person1 = Person('John', 'Done', 22) Undefined
let person1 = new Person('John', 'Done', 22)
    person1.getUserInfo()
    console.log(person1);

Person.prototype.getUserName = function(){
    document.write(`<h1> Username: ${this.username}  </h1>`)
}

person1.getUserName()
console.log(person1);