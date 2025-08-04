const obj1 = {
    Nombre: 'Maria',
    Apellido: 'Hernandez',
    Direccion: {
        Estado: 'Carabobo',
        Ciudad: 'Montalban'
    },
    editA() {
        this.a = 'AAAAAAAAAAA'
    }
}

function isObject(Subject) {
    return typeof Subject == 'object'
}


function isArray(Subject) {
    return Array.isArray(Subject)
}


function deepCopy(Subject) {
   let copySubject

    const subjectISObject = isObject(Subject)
    const subjectISArray = isArray(Subject)

    console.log(subjectISObject, subjectISArray)

    if (subjectISArray){
        copySubject = []
    } else if (subjectISObject){
        copySubject = {}
    } else {
        return Subject
    }

    for (key in Subject) {
        console.log('Estoy en esta key', key)

        const keyIsObject = isObject(Subject[key])
        console.log(keyIsObject)

        if (keyIsObject) {
            copySubject[key] = deepCopy(Subject[key])
        } else {
            if(subjectISArray) {
                copySubject.push(Subject[key])
            } else {
                copySubject[key] = Subject[key]
            }
        }
    }

   return copySubject
}