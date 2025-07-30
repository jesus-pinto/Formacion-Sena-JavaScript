// arrays destructuring

let fruits = ['Apple', 'Banana']
let [a, b] = fruits
console.log(a, fruits[1])

// object destructuring

let user = {username: 'Oscar', age: 12}
let  {username, age} = user
console.log(username, age)


// Spread operator
let person = {name: 'Oscar', age: 28}
let country = 'MX'
let data = { id: 1, ...person, country}
console.log(data)


// Rest 

function sum(num, ...values){
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}

sum(1, 1, 2, 3)







