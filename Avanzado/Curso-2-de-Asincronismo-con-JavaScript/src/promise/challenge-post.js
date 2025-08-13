import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    return fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

const data = {
    title:  '585 ', // título único
    price: 585,
    description: "Andy shoes are designed to keeping in...",
    categoryId: 1,
    images: [
        "https://placehold.co/600x400",
        "https://placehold.co/600x400",
        "https://placehold.co/600x400"
    ]
};

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
