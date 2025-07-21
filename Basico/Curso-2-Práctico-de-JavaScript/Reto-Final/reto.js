const usersDatabase = [
    {
        username: "andres",
        password: "123"
    },
    {
        username: "jesus",
        password: "123"
    },
    {
        username: "alfredo",
        password: "123"
    },
    {
        username: "pinto",
        password: "123"
    },
]

const usersTimeline = [
    {
        usename: "Estefany",
        timeline: "Me encanta JS"
    },
    {
        usename: "juan",
        timeline: "amo el futbol"
    },
    {
        usename: "eva",
        timeline: "Me encanta JS y html"
    },
    {
        usename: "maria",
        timeline: "Me encanta pelear"
    },
]

const username = prompt("¿Cuál es tu usuario?")
const password = prompt("¿Cuál es tu contraseña?")

function  usuarioExistente(usename, password) {
    for(let i = 0; i < usersDatabase.length; i++) {
        if(
            usersDatabase[i].username === usename,
            usersDatabase[i].password === password
        ) {
            return true
            break
        } else {
            return false
        }
    }
}

function signIn(username, password) {
    if(usuarioExistente(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`)
        console.log(usersTimeline)
    } else {
        alert("Uuups, ususario o contraseña es incorrecta!")
    }
}

signIn(username, password)