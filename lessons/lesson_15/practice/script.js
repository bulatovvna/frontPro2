let url = 'https://fakestoreapi.com/products'
let div_root = document.querySelector('#root')
let div_wrapper = document.createElement('div')
div_wrapper.classList.add('product_wrapper')

fetch(url)
    .then(res => res.json())
    .then(data => {
        let newData = data.filter(elem => Number.isInteger(elem.price))
        render(newData)
    })

function render(array){
    for(let elem of array){
        let div_product = document.createElement('div')
        div_product.classList.add('product_elem')

        let p_title = document.createElement('p')
        p_title.innerText = elem.title

        let p_price = document.createElement('p')
        p_price.innerText = elem.price

        let img_product = document.createElement('img')
        img_product.classList.add('product_image')
        img_product.src = elem.image

        div_product.append(img_product, p_title, p_price)
        div_wrapper.append(div_product)
    }
    div_root.append(div_wrapper)
}