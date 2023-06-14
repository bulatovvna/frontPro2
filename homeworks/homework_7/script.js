let url = "https://dummyjson.com/products"

fetch(url)
    .then(res => res.json())
    .then(data => {
        createProduct(data)
    })


function createProduct(products){
    let container = document.querySelector('.container')

    products.forEach(product => {

        let productItem = document.createElement('div')
        productItem.className = 'product'

        let img = document.createElement('img')
        img.setAttribute('src', product.thumbnail)
        productItem.append(img)

        let p_title = document.createElement('p')
        p_title.className = 'title'
        p_title.innerText = product.title.value
        productItem.append(p_title)

        let p_price = document.createElement('p')
        p_price.className = 'price'
        p_price.innerText = product.price
        productItem.append(p_price)

        let rating = document.createElement('div')
        rating.className = 'rating'

        for (let i = 1; i <= 5; i++) {
            let star = document.createElement('span')
            star.className = 'fa fa-star'
            star.setAttribute('href', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
            rating.append(star)
        }
        productItem.append(rating)

        container.append(productItem)
    })
}

