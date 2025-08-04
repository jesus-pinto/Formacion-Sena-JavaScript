function requiredParam(param) {
    throw new Error(param + ' es obligatorio');
}

function createStudent({
    name = requiredParam('name'),
    age,
    email =  requiredParam('email'),
    twitter,
    facebook,
    instagram,
    apporvedCourses = [],
    learninggPaths = [],
} = {}) {
    return {
        name,
        email,
        age,
        apporvedCourses,
        learninggPaths,
        socialMedia: {
            twitter,
            facebook,
            instagram
        }
        
    }
}

const maria = createStudent({
    name: 'Maria',
    age: 17,
    email: 'mariahernandez@gmail.com',
    twitter: 'maria123',

})