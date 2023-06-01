// Реализовать форму которая позволяет добавить новый элемент в список продуктов в массив. 
// Данные из массива должно отображться в интерфейсе при добавлении нового товара. 

let products = JSON.parse(localStorage.getItem('products')) ?? []

let form_elem = document.querySelector('form')
let div_root = document.querySelector('#root')
let div_wrapper = document.createElement('div')

div_wrapper.classList.add('div_wrapper')

form_elem.onsubmit = (event) => {
    event.preventDefault()
    let form_data = new FormData(event.target)
    let data = Object.fromEntries(form_data)
    data.id = Date.now()
    products.push(data)
    rerender(products)
}

let button = document.querySelector('#rem_btn')
button.onclick = () => {
    localStorage.removeItem('products')
    products = []
    rerender(products)
}

function rerender(array){
    localStorage.setItem('products', JSON.stringify(array))
    div_wrapper.innerHTML = ''
    render(array)
}

function render(array){
    for (let elem of array){
        let div_elem = document.createElement('div')
        div_elem.classList.add('card')
        let p_price = document.createElement('p')
        let p_name = document.createElement('p')

        div_elem.ondblclick = () => {
            removeElem(elem.id)
        }

        p_name.innerText = elem.name
        p_price.innerText = elem.price

        div_elem.append(p_name, p_price)
        div_wrapper.append(div_elem)
    }
    div_root.append(div_wrapper)
    
}

function removeElem(id){
    products = products.filter(elem => elem.id !== id)
    rerender(products)
}


render(products)

// new Task:
// Добавить на разметке кнопку, которая будет очищать данные на стороне интерфейса и LS соотсветсвенно