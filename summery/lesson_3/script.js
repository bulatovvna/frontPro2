// const btn = document.getElementById('btn')


// let count = 0
// const counter = () => {
//     // console.log('ok');
    
//     count++

//     // console.log(count);
//     document.getElementById('result').innerHTML = count
// }

// btn.onclick = counter

// const prev = document.querySelector('.gallery__prev')
// const next = document.querySelector('.gallery__next')

// let count = 1
// const nextCount = () => {
//     count++

//     if(count > 5){
//         count = 1
//     }

//     document.querySelector('.gallery__img').src = `./img/${count}.jpg`
// }

// const prevCount = () => {
//     count--

//     if(count === 0){
//         count = 5
//     }

//     document.querySelector('.gallery__img').src = `./img/${count}.jpg`
// }

// next.onclick = nextCount
// prev.onclick = prevCount


// const zoomImg = document.querySelector('.zoom__img')

// let isZoom = false
// const zoom = () => {

//     if(!isZoom) {
//         zoomImg.style = `width: 250px; height: 250px; `
//         isZoom = true
//     }
//     else {
//         zoomImg.style = `width: 200px; height: 200px; `
//         isZoom = false
//     }
    
// }

// zoomImg.onclick = zoom

// let grids = document.querySelectorAll('.grid > div')
// let button = document.querySelector('button')


// const randColor = () =>  {
//     let r = Math.floor(Math.random() * 255)
//     let g = Math.floor(Math.random() * 255)
//     let b = Math.floor(Math.random() * 255)
    
//     return `background: rgb(${r},${g},${b})`
// }

// function setColor(){
//     this.style = randColor()
// }

// for (let i = 0; i < grids.length; i++) {
//     const element = grids[i];


//     element.onclick = setColor
// }

// function clear(){
//     for (let i = 0; i < grids.length; i++) {
//         const element = grids[i];
    
//         element.style.background = '#fff'
//     }   
// }

// button.onclick = clear

// const zoom500 = document.querySelector(`.zoom__img`)

// let zoomCount = 200
// let checkZoom = false;

// const zoom1 = () => {
//     if (!checkZoom) {
//         zoomCount += 50
//         zoom500.style = `width:${zoomCount}px; height:${zoomCount}px;`
//         if (zoomCount == 500) checkZoom = true;
//     }
//     else {
//         zoomCount -= 50
//         zoom500.style = `width:${zoomCount}px; height:${zoomCount}px;`
//         if (zoomCount === 200) checkZoom = false;
//     }
// }
// zoom500.onclick = zoom1

// ---------------------------------------------------

const toggle = document.querySelector('.navbar__toggle')

function toggleHandler(){

    if(this.classList.contains('navbar_toggle_active')){
        this.classList.remove('navbar_toggle_active')
        this.parentElement.querySelector('.navbar').classList.remove('navbar__show')
    } else {
        this.classList.add('navbar_toggle_active')
        this.parentElement.querySelector('.navbar').classList.add('navbar__show')
    }
}

toggle.onclick = toggleHandler;
