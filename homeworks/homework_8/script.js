// 1
let name = "Pizza" 
let phone = "81234567890" 

class Delivery{
    constructor(name, phone){
        this.name = name
        this.phone = phone
        this.validPhone = phone.startsWith('+')
    }
}

let deliveryName = new Delivery(name,phone)
console.log(deliveryName);

// -----------------------

console.log('------2------');

class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}

class Users extends Permissions{
    constructor(name){
        super();
        this.name = name
    }
}

let user = new Users('Alex')
console.log(user);

// ----------------------

console.log('------3-------');

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.state = 100
        this.type = null
    }

    fix(){
        this.state = state * 1.5
    }

    set setState(pagesCount){
        if(pagesCount < 0) this.state = 0
        else if(pagesCount > 100) this.state = 100
        else this.state = pagesCount
    }
    
    get readState(){
        return this.state
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount)
    this.type = 'magazine'
    }
}
let magazine = new Magazine('Forbes', 2023, 120)
console.log(magazine);

class Book extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount,author){
        super(name, releaseDate, pagesCount)
        this.author = author
        this.type = 'book'
    }
}
let book = new Book('Never eat alone', 2014, 402, 'Keith Ferrazzi')
console.log(book);

class NovelBook extends Book{
    constructor(name, releaseDate, pagesCount,author){
        super(name, releaseDate, pagesCount)
        this.author = author
        this.type = 'novel'
    }
}

class FantasticBook extends Book{
    constructor(name, releaseDate, pagesCount,author){
        super(name, releaseDate, pagesCount)
        this.author = author
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book{
    constructor(name, releaseDate, pagesCount,author){
        super(name, releaseDate, pagesCount)
        this.author = author
        this.type = 'detective'
    }
}
