const divRoot = document.querySelector('.root')

let sliderIndex = 0

const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
    'https://pictures.pibig.info/uploads/posts/2023-04/thumbs/1681211316_pictures-pibig-info-p-risunok-na-temu-priroda-krasivo-1.jpg'
]

const frame = document.createElement('div')
frame.className = 'frame'

const cards = document.createElement('cards')
cards.className = 'cardsWrapper'

const triggers = document.createElement('div')
triggers.className = 'triggers'

const leftBtn = document.createElement('button')
leftBtn.innerText = '<'

const rightBtn = document.createElement('button')
rightBtn.innerText = '>'

triggers.append(leftBtn, rightBtn)


for(let elem of images){
    let card = document.createElement('div')
    card.className = 'card'
    card.style.backgroundImage = `url(${elem})`
    cards.append(card)
}

// ------------------------
let sliderBtns = document.createElement('div')
sliderBtns.className = 'sliderBtnsWrapper'

for( let index in images){
    const button = document.createElement('button')
    button.className = 'sliderElemBtn'

    if(+index === sliderIndex){
        button.classList.add('active')
    }

    button.onclick = () => {
        sliderIndex = +index
        cards.style.left = `${-1 * sliderIndex * 500}px`

        const allBtns = document.querySelectorAll('.sliderElemBtn')
        allBtns.forEach((elem) => elem.classList.remove('active'))

        button.classList.add('active')
    }

    sliderBtns.append(button)
}

frame.append(cards, triggers, sliderBtns)
divRoot.append(frame)

const allBtns = document.querySelectorAll('.sliderElemBtn')

const goRight = () => {
    if(sliderIndex < images.length - 1){
        sliderIndex++
        allBtns[sliderIndex - 1].classList.remove('active')
        allBtns[sliderIndex].classList.add('active')
        
        cards.style.left = `${-1 * sliderIndex * 500}px`
    } else {
        sliderIndex = 0
        allBtns[allBtns.length - 1].classList.remove('active')
        allBtns[sliderIndex].classList.add('active')

        cards.style.left = `${-1 * sliderIndex * 500}px`
    }

}

const goLeft = () => {
    if(sliderIndex != 0){
        sliderIndex--
        allBtns[allBtns.length + 1].classList.remove('active')
        allBtns[sliderIndex].classList.add('active')

        cards.style.left = `${-1 * sliderIndex * 500}px`
    } else {
        sliderIndex = images.length - 1
        allBtns[0].classList.remove('active')
        allBtns[sliderIndex].classList.add('active')

        cards.style.left = `${-1 * sliderIndex * 500}px`
    }
}

rightBtn.addEventListener('click', goRight)
leftBtn.addEventListener('click', goLeft)

// --------------------------------------

function moveSlider(index,side ){
    const allBtns = document.querySelectorAll('.sliderElemBtn')
    cards.style.left = `${-1 * sliderIndex * 500}px`

    if(side === 'left'){
        if(index !== 0){
            
        }
    }
}