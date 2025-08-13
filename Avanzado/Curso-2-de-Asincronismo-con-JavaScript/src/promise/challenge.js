import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi)
}

/*
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
    })
    .then(() => {
        console.log('Hola')
    })
    .catch(error => console.log(error))

*/

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log("Primer llamado, productos ",products)

        return fetchData(`${API}/products/${products[0].id}`)
    })

    .then(response => response.json())
    .then(product => {
        console.log("Segundo llamado titulo ", product.title)

        return fetchData(`${API}/categories/${product.category.id}`)
    })

    .then(response => response.json())
    .then(category => {
        console.log("Tercer llamado, nombre",category.name)

        console.log(category.name)
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Final.......'))