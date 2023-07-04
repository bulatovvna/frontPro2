const divRoot = document.querySelector('#root')

async function fetchProducts(){
    let url = "https://dummyjson.com/products"
    let res = await fetch(url)
    let data = await res.json()
    render(data.products)
}

function render(data){
    let divContainer = document.createElement('div')
    divContainer.className = 'productContainer'

    for(let elem of data){
        let productItem = document.createElement('div')
        productItem.className = 'productItem'

        let productDesc = document.createElement('div')

        let imgProduct = document.createElement('div')
        imgProduct.className = 'imgProduct'
        imgProduct.style.backgroundImage = `url(${elem.images[0]})`

        let pTitle = document.createElement('p')
        let pPrice = document.createElement('p')

        pTitle.innerText = elem.title
        pPrice.innerText = elem.price

        productDesc.append(pTitle, pPrice, rating(elem.rating))
        productItem.append(imgProduct, productDesc)
        divContainer.append(productItem)

        productItem.onclick = () => { modal(elem) }
    }

    divRoot.append(divContainer)
}

function modal(data){
    let divModalArea = document.createElement('div')
    divModalArea.className = 'modalArea'

    let divModalContainer = document.createElement('div')
    divModalContainer.className = 'modalContainer'

    let divProductImages = document.createElement('div')
    divProductImages.className = 'productImagesWrapper'

    let divProductInfo = document.createElement('div')
    divProductInfo.className = 'productInfoWrapper'

    let divProductDesc = document.createElement('div')
    divProductDesc.className = 'divProductDesc'

    let textProductDesc = document.createElement('p')
    textProductDesc.innerHTML = `<h4>Product fescription:</h4> ${data.description}`

    let productModalTitle = document.createElement('h4')
    productModalTitle.className = 'productModalTitle'
    productModalTitle.innerText = `Product name: ${data.title}`

    divProductDesc.append(productModalTitle, textProductDesc, rating(data.rating))

    let mainImg = document.createElement('img')
    mainImg.className = 'modalMainImg'
    mainImg.src = data.images[0]
    divProductInfo.append(mainImg, divProductDesc)

    
    data.images.forEach(elem => {
        let image = document.createElement('img')
        image.src = elem
        divProductImages.append(image)

        image.onclick = () => {
            mainImg.src = elem
        }
    })

    divModalContainer.append(divProductImages, divProductInfo)

    divModalArea.append(divModalContainer)
    divRoot.append(divModalArea)

    divModalArea.onclick = () => {
        divModalArea.remove()
    }

    divModalContainer.onclick = (event) => {
        event.stopPropagation()
    }
}

function rating(n){
    let countStars = Math.round(n)

    let divRating = document.createElement('div')
    divRating.className = 'starsWraper'

    for (let i = 0; i < 5; i++) {
        let spanElem = document.createElement('span')

        if(countStars > i) spanElem.className = 'fa fa-star active'
        else spanElem.className = 'fa fa-star';

        divRating.append(spanElem)
    }

    return divRating
}

fetchProducts()