function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const ge = gen()
console.log(ge.next().value)
console.log(ge.next().value)
console.log(ge.next().value)


function* iterate(array) {
    for(let value of array){
        yield value
    }
}

const it = iterate(['Jesus', 'Oscar', 'Ana', 'Maria', 'Johana'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)