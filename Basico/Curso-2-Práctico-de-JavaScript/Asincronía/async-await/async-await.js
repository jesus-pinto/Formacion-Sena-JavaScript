/*
function fetchData() {
    fetch("https://rickandmortyapi.com/api/character/123")
    .then((Response) => Response.json ())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}

fetchData()

*/

/*
async function fetchData() {
    try {
        let Response = await fetch("https://rickandmortyapi.com/api/character/123")
        let data = await Response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fetchData()

*/


const urls = [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2",
    "https://rickandmortyapi.com/api/character/3"
];

async function fetchNewData() {
    try {
        for (let url of urls) {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

fetchNewData();

