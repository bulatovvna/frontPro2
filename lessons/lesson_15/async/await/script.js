// async/await


// 1. Синтаксический сахар - позволяет немного удобнее работать с промисами
// 2. Применяется строго к функциям. Перед функции нужно указывать async
// 3. При присвоении к выражению нужно указывать await 
// 4. Код внрутри будет дожидаться выпонения кода каждого await
// 5. Отсутствует catch(reject)

async function fetchUsers(){
    try {
        let url = 'https://jsonplaceholder.typicode.com/users'
        let response = await fetch(url)
        var data = await response.json()
        render(data)
    } catch {
        renderError('Back doesnt work')
    }
}

fetchUsers()

// ------------------------------------------------------
// Обработчик ошибок try ... catch
// Назначение - обработка возможных ошибок

// let a = 10 - b
// console.log('hello') 

// try {
//     let a = 10 - b
// } catch {
//     console.log('Fixed error');
// }