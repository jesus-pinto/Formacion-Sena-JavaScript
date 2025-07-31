

export function videoPlay (id) {
const urlSecreta = 'https://platxiultrasecretomasquelanasa.com/' + id 
    console.log('Se esta reproduciendo desde la url' + urlSecreta)
}
export function videoStop (id) {
    const urlSecreta = 'https://platxiultrasecretomasquelanasa.com/' + id 
    console.log('Pausamos la url' + urlSecreta)
}


export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name
        this.videoID = videoID
    }


    reproducir () {
        videoPlay(this.videoID)
    }

    pausar() {
        videoStop(this.videoID)
    }

}





// =======================================================
class Course {
    constructor({
        name,
        classes = []
    }) {
        this._name = name
        this.classes = classes
    }

    get name () {
        return this._name
    }

    set name(nuevoNombre){
        if (nuevoNombre === 'curso malito de programacion basica') {
            console.error('Web... no')
        } else {
            this._name = nuevoNombre
        }
        
    }
}

const cursoProgBasica = new Course({
    name: 'Curso Gratis de programacion basica'
})



const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo de HTML y CSS'
})

const cursoOrientadaObjetos = new Course({
    name: 'Curso de programacion orientada a objetos'
})