const juan = {
    name: 'juanito',
    age: 16,
    approvedCourses: ["Curso 1"],
    addCpurse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

/*
console.log(Object.keys(juan))
console.log(Object.getOwnPropertyNames(juan))
console.log(Object.entries(juan))
*/

// Object.seal(juan)
Object.freeze(juan)

console.log(Object.getOwnPropertyDescriptors(juan))


