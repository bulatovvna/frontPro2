function func1(){
    return new Promise ((resolve,reject) => {
        resolve(1)
    })
}

function func2(){
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(2);
        },1000)
    })
}

function func3(){
    return new Promise ((resolve,reject) => {
        console.log(3);
    })
}

func1().then((resolve) => {
    console.log(resolve);
    return func2()
}).then((resolve) => {
    console.log(resolve);
    return func3()
}).then((resolve) => {
    console.log(resolve);
})
