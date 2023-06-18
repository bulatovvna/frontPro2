
    let url = "https://dummyjson.com/products"

    fetch(url)
        .then(res => res.json())
        .then(data => {
            render(data.products)
        })




function render(products){
    let container = document.querySelector('.container')

    products.forEach(product => {

        let productItem = document.createElement('div')
        productItem.className = 'product'

        let img = document.createElement('img')
        img.setAttribute('src', product.images[0])
        productItem.append(img)

        let p_title = document.createElement('p')
        p_title.className = 'title'
        p_title.innerText = `Title: ${product.title}`
        productItem.append(p_title)

        let p_price = document.createElement('p')
        p_price.className = 'price'
        p_price.innerText = `Price: ${product.price}`
        

        productItem.append(img, p_title, p_price, rating(product))

        container.append(productItem)

    })
}

function rating(n){
    let ratingValue = Math.round(n.rating)

    let rating = document.createElement('div')
    rating.className = 'rating'

    for (let i = 1; i <= 5; i++) {
        let star = document.createElement('span')
        star.className = 'fa fa-star'
        
        if(i <= ratingValue) {
            star.classList.add('active')
        }

        rating.append(star)
    }

    return rating
}