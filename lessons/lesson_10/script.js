
// let p_elem = document.getElementsByTagName('p')

// let p_elem = document.querySelector('p')
// let scr = document.querySelector('script')

// let div_elem = document.createElement("div")
// div_elem.innerText = 'Hello World!'
// p_elem.after(div_elem)
// scr.before(div_elem)

// ------------------------------------
// let div_elem = document.createElement("div")
// div_elem.innerText = 'Hello World!'
// document.body.after(div_elem)

// let copy_div_elem = div_elem.cloneNode(true)
// document.body.prepend(copy_div_elem)

// ------------------------------------

// 1. Создайте ul список внутри div#root и поместите туда
//  3 li элемента с текстовым сво-вом (1,2,3)

// let div_elem = document.querySelector('#root')

// let ul_elem = document.createElement('ul')

// let li1 = document.createElement('li')
// li1.innerText = '1'
// let li2 = document.createElement('li')
// li2.innerText = '2'
// let li3 = document.createElement('li')
// li3.innerText = '3'

// ul_elem.prepend(li1,li2,li3)

// div_elem.append(ul_elem)

// Another example

let div_elem = document.querySelector('#root')
let ul_elem = document.createElement('ul')
div_elem.append(ul_elem)

for (let i = 1; i < 4; i++) {
    let li_elem = document.createElement('li')
    li_elem.innerText = i
    ul_elem.append(li_elem)
}

// remove element ----------------------------------
ul_elem.remove()

// mini hm
// МИНИ - ДЗ
// В разметке заданы теги

// <div id="root">
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
// </div>

// Замените все теги li на полужирный шрифт сохранив текствое сво-во