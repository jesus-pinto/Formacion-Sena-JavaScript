let expr = "papayas"

switch(expr){
    case "Naranjas":
        console.log("Las naranjas cuestan $20 kilo")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $43 el kilo")
        break;
    case "platanos":
        console.log("El platano esta en $30 el kilo")
        break;
    case "Mangos":
    case "papayas":
        console.log("Los mangos y las papayas cuestan $35 el kilo")
        break;
    default:
        console.log(`Lo siento, no contamos con ${expr}`)
}

console.log("¿Hay algo mas que desees?")

