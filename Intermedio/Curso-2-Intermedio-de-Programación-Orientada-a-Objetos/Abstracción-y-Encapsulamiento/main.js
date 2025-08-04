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

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        facebook: undefined,
        instagram: undefined,
    },
}

const juan = deepCopy(studentBase)
Object.seal(juan) //no deja eliminar nada

// juan.name = 'Maria'