// Objetos literales
const natalia = {
    name: 'Natalia',
    age: 21,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS'
    ],
    aprobarCurson(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
}
// Hacer que natalia apruebe otro curso
natalia.cursosAprobados.push('Curso de responsive design')


//===========================================================
// Prototipos

function Student(name, age, cursosAprobados) {
    this.name = name
    this.age = age
    this.cursosAprobados = cursosAprobados
    
}
Student.prototype.cursosAprobados = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)
}

const juanita = new Student(
    "juanita",
    15,
    [
        'Curso de introduccion a los videojuegos',
        'Curso de creacion de los personajes'
    ]
)


//===========================================================
// Prototipos con la sintaxis de clases

class Student2 {
    constructor({
        name, 
        age, 
        cursosAprobados = [],
        email,
        learningPaths,
    }) {
        this.name = name
        this.age = age
        this.email = email
        this.cursosAprobados = cursosAprobados
        this.learningPaths = learningPaths
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
}

const miguel = new Student2({
    email: 'miguel@gmail.com',
    age: 25,
    cursosAprobados: [
        'Curso de introduccion a los videojuegos',
        'Curso de creacion de los personajes'   
    ],
    name: 'Miguel',
    learningPaths: [
        'escuelaWeb',
        'escuelaData'
    ],
})