// capacidades que tienen lsa funciones al igual que otros

// 1 para funciones como argumentos -> callback

function a () {}
function b (a) {}
b(a)

// Retornar funciones

function a () {
    function b () {}
    return b
}

// Asignar funciones a variable 

const a =  function () {}

// Tener propiedades y metodos 

function a () {}
const obj = {}
a.call(obj)

// Anidar funciones -> nested functions

function a (){
    function b () {
        function c (){

        }
        c()
    }
    b()
}
a()


// Es posible almacenar funciones en los objetos

const rocket = {
    name: "Falcon 9",
    launchhMessage: function launchhMessage () {
        console.log("🔥🔥🔥")
    }
}

rocket.launchhMessage()