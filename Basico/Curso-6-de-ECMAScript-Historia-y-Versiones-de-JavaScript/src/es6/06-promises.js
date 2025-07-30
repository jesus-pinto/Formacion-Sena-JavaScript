const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!')
        } else {
            reject('Whoooops! no funciono')
        }
    })
}

anotherFunction()
    .then(Response => console.log(Response))
    .catch(err => console.log(err))