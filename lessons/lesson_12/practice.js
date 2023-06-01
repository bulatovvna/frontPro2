// Реализовать форму которая позволяет добавить новый элемент в список продуктов в массив. 
// Данные из массива должно отображться в интерфейсе при добавлении нового товара. 

let products = [
    {id: 1, name: 'Велосипед', price: 1000},
    {id: 2, name: 'Самокат', price: 2000},
    {id: 3, name: 'Ролики', price: 400},
]

let form_elem = document.querySelector('form')
let div_root = document.querySelector('#root')
let div_wrapper = document.createElement('div')

form_elem.onsubmit = (event) => {
    event.preventDefault()
    let form_data = new FormData(event.target)
    let data = Object.fromEntries(form_data)
    data.id = Date.now()
    products.push(data)
    rerender(products)
}

function rerender(array){
    div_wrapper.innerHTML = ''
    render(array)
}

function render(array){
    for (let elem of array){
        let div_elem = document.createElement('div')
        div_elem.classList.add('card')
        let p_price = document.createElement('p')
        let p_name = document.createElement('p')

        p_name.innerText = elem.name
        p_price.innerText = elem.price

        div_elem.append(p_name, p_price)
        div_wrapper.append(div_elem)
    }
    div_root.append(div_wrapper)
    
}
render(products)
