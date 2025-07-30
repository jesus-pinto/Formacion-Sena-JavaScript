const user = { username: 'jesus', age: 21, country: 'VNZ'}
const {username, ...values} = user
console.log(username)
console.log(values)