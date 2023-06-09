let store = {
    navbar: [
        {
            id: 1,
            title: 'Rucksack',
            classNames: 'navbar__item',
            isActive: true
        },
        {
            id: 2,
            title: 'T-shirt',
            classNames: 'navbar__item',
            isActive: false
        },
        {
            id: 3,
            title: 'Shirts',
            classNames: 'navbar__item',
            isActive: false
        },

    ],
    products: {
        '1' : [
            {
                id: 1,
                img: "./img/imgRucksack.jpg" ,
                title: 'Рюкзак Louis Vuitton Discovery 1 ',
                price: 150000
            },
            {
                id: 2,
                img: "./img/imgRucksack.jpg" ,
                title: 'Рюкзак Louis Vuitton Discovery 2 ',
                price: 200000
            },
            {
                id: 3,
                img: "./img/imgRucksack.jpg" ,
                title: 'Рюкзак Louis Vuitton Discovery 3 ',
                price: 100000
            },
            {
                id: 4,
                img: "./img/imgRucksack.jpg" ,
                title: 'Рюкзак Louis Vuitton Discovery 4 ',
                price: 300000
            },
        ],
        '2':[
            {
                id:1,
                img:'./img/imgRucksack.jpg',
                title: 'Рюкзак Louis Vuitton Discovery2',
                price: '16 000$'
            }, {
                id:2,
                img:'./img/imgRucksack.jpg',
                title: 'Рюкзак Louis Vuitton Discovery2',
                price: '15 000$'
            }, {
                id:3,
                img:'./img/imgRucksack.jpg',
                title: 'Рюкзак Louis Vuitton Discovery2',
                price: '10 000$'
            }, {
                id:4,
                img:'./img/imgRucksack.jpg',
                title: 'Рюкзак Louis Vuitton Discovery2',
                price: '11 000$'
            },
        ]
    }
}

const addProductInCart = (data) => {
    data.cartId = Date.now()

    let cartItems = JSON.parse(localStorage.getItem('cartItems'))

    if(!cartItems){
        cartItems = []
    }

    cartItems = [...cartItems, data];
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

const setNavbar = (state) => {
    let navbar = document.createElement("ul");
    navbar.setAttribute("class", "navbar");

    for (let i = 0; i < state.length; i++) {
        let li = document.createElement("li");

        li.classList.add(state[i].classNames);

        if (state[i].isActive) {
            li.classList.add("navbar__item_active");
        }

        li.innerText = state[i].title;

        navbar.append(li)
    }

    return navbar;
}

// document.getElementById('navbar').append(setNavbar(store.navbar))

const setProducts = (catalogs, products) => {
    let cardsItems = document.createElement("div");
    cardsItems.classList.add("cards__items");

    catalogs.forEach((catalog) => {
        if (catalog.isActive) {
            products[catalog.id].forEach(product => {
                let item = document.createElement("div");
                item.classList.add("item");

                let itemHeader = document.createElement("div");
                itemHeader.classList.add("item__header");

                let itemIcon = document.createElement("img");
                itemIcon.setAttribute("src", "./img/iconBasket.svg");
                itemIcon.addEventListener('click', () => addProductInCart(product))

                itemHeader.append(itemIcon);

                let itemImg = document.createElement("img");
                itemImg.setAttribute("src", product.img)
                itemImg.classList.add("item__image");

                let itemTitle = document.createElement("h2");
                itemTitle.classList.add("item__title");
                itemTitle.innerText = product.title;

                let itemPrice = document.createElement("h3");
                itemPrice.classList.add("item__price");
                itemPrice.innerText = product.price;

                item.append(itemHeader);
                item.append(itemImg);
                item.append(itemTitle);
                item.append(itemPrice);

                cardsItems.append(item);
            })
        }
    })

    return cardsItems;
}

const openModalCart = () => {
    let modalCart = document.querySelector('.modal')

    modalCart.classList.toggle('modal__active')
}

function render(){
    let navbar = document.querySelector("#navbar")
    let cards = document.querySelector(".cards")
    let cartOpen = document.querySelector('.header_cart')
    let cartClose = document.querySelector('.cart__close')

    navbar.append(setNavbar(store.navbar))
    cards.append(setProducts(store.navbar, store.products));

    cartOpen.onclick = openModalCart   
    cartClose.onclick = openModalCart 
}

render();