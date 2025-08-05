// Ambito de bloque

{
    let greeting = 'Hello World'
    var lang = 'English' // se puede llamar desde afuera 
    console.log('Saludo desde el bloque',greeting)
}

console.log('Idioma fuera del bloque',lang) // English
console.log(greeting) // Error de referencia