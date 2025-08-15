const API_KEY = '&api_key=live_zyEIkpokSqCQ46UfNDEyxtDEb3NswDmNJsKaDgWtJ34g5McMvF73C9bo9TAFwD03'
const API_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=2${API_KEY}`
const API_FAVORITES = `https://api.thecatapi.com/v1/favourites?limit=2${API_KEY}`

const spanError = document.getElementById('Error')

async function loadRandomMichi() {
    const res = await fetch(API_RANDOM)
    const data = await res.json()

    console.log('loadRandomMichi')
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status
    } else {
        const img1 = document.getElementById('img1')
        const img2 = document.getElementById('img2')

        img1.src = data[0].url
        img2.src = data[1].url
    }
}

async function loadFavoritesMichi() {
    const res = await fetch(API_FAVORITES)
    const data = await res.json()

    console.log('loadFavoritesMichi')
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status;
    }

}



loadRandomMichi()
loadFavoritesMichi()