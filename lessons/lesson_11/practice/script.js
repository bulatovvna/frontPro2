let switchElem = document.querySelector('input')

document.body.className = localStorage.getItem('theme') ?? 'light'
switchElem.checked = (localStorage.getItem('theme') === 'dark') ? true : false

switchElem.onclick = () => {
    if(switchElem.checked){
        document.body.className = 'dark'
        localStorage.setItem('theme', 'dark')
    } else {
        document.body.className = 'light'
        localStorage.setItem('theme', 'light')
    }

    // document.body.className = (switchElem.checked) ? 'dark' : 'light'
}

// -------------------------------


