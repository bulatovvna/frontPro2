let url = "https://dummyjson.com/products"

fetch(url)
    .then(res => res.join())
    .then(data => {
        createProduct(data)
    })


function createProduct(){
    for( let elem of array){
        let product = document.createElement('div')
        product.className = 'product'

        let img = document.createElement('img')
        img.setAttribute('src', elem.thumbnail)

        let p_title = document.createElement('p')
        p_title.className = 'title'
        p_title.innerText = elem.title.value

        let p_price = document.createElement('p')
        p_price.className = 'price'
        p_price.innerText = elem.price

        let rating = document.createElement('div')
        rating.className = 'rating'

        for (let i = 1; i < 5; i++) {
            let star = document.createElement('span')
            star.className = 'fa fa-star'
            star.setAttribute('href', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
            rating.append(star)
        }

        product.append(img, p_title, p_price, rating)
    }
}

