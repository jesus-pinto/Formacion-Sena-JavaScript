
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';
const API_URL_FAVOTITES = 'https://api.thecatapi.com/v1/favourites?api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';
const API_URL_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=c08d415f-dea7-4a38-bb28-7b2188202e46`;
const API_UPLOAD = 'https://api.thecatapi.com/v1/images/upload';

const spanError = document.getElementById('error')

async function loadRandomMichis() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  console.log('Random')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');

    img1.src = data[0].url;
    img2.src = data[1].url;

    btn1.onclick = () => saveFavouriteMichi(data[0].id);
    btn2.onclick = () => saveFavouriteMichi(data[1].id);
  }
}

async function loadFavouriteMichis() {
  const res = await fetch(API_URL_FAVOTITES);
  const data = await res.json();
  console.log('Favoritos')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    const section = document.getElementById('favoriteMichis')
    section.innerHTML = ''

    const h2 = document.createElement('h2')
    const h2Text = document.createTextNode('Michis favoritos')
    h2.appendChild(h2Text)
    section.appendChild(h2)

    const section2 = document.createElement('section')
    section2.classList.add('container')

    data.forEach(michi => {

      const article = document.createElement('article');
      article.classList.add('cartasMichis')//------------clases

      const imgFavorita = document.createElement('img');
      imgFavorita.classList.add('imgFavorita')//-------------clases

      const btnFavorita = document.createElement('button');
      btnFavorita.classList.add('btnFavorita')//-------------clases

      const btnText = document.createTextNode('Eliminar al michi de favoritos');

      imgFavorita.src = michi.image.url;
      btnFavorita.appendChild(btnText);
      btnFavorita.onclick = () => daleteFavouriteMichi(michi.id)
      article.appendChild(imgFavorita);
      article.appendChild(btnFavorita);
      section2.appendChild(article)
      section.appendChild(section2);
    });
  }
}

async function saveFavouriteMichi(id) {
  const res = await fetch(API_URL_FAVOTITES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image_id: id
    }),
  });
  const data = await res.json();

  console.log('Save')
  console.log(res)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    console.log('Michi guardado en favoritos')
    loadFavouriteMichis()
  }
}

async function daleteFavouriteMichi(id) {
  const res = await fetch(API_URL_DELETE(id), {
    method: 'DELETE',
  });
  const data = await res.json();

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    console.log('Michi eliminado de favoritos')
    loadFavouriteMichis()
  }
}



async function uploadMichiPhoto() {
  const form = document.getElementById('uploadingForm');
  const formData = new FormData(form);

  console.log([...formData]); // para verificar lo que envías

  const res = await fetch(`${API_UPLOAD}`, {
    method: 'POST',
    headers: {
      'x-api-key': 'c08d415f-dea7-4a38-bb28-7b2188202e46', // OJO: NO pongas "Content-Type", fetch lo pone automáticamente con FormData
    },
    body: formData
  });

  const data = await res.json().catch(() => {
    console.error("Respuesta no es JSON");
    return null;
  });

  if (res.status !== 201) {
    spanError.innerHTML = `Hubo un error al subir michi: ${res.status} ${data.message}`
  }
  else {
    console.log("Foto de michi cargada :)");
    console.log({ data });
    console.log(data.url);
    saveFavouriteMichi(data.id) //para agregar el michi cargado a favoritos.
  }
}




loadRandomMichis();
loadFavouriteMichis();