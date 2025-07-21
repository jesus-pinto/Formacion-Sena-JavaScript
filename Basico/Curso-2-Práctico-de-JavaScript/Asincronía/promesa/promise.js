const promise = new promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true
        if (operationSuccessful) {
            resolve("La operación fue exitosa!")
        } else {
            reject("Falló la operqción")
        }
    },2000)
})

promise
    .then((successMessage) => {
        console.log(successMessage)
    })
    .catch((errorMessage) =>{
        console.log(errorMessage)
    })