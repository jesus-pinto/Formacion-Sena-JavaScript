const matriz = [
    [1,2,3],
    [4,5,6, [4,5,6,[4,5,6]]],
    [7,8,9]
];

const rta = matriz.flat();
const rta2 = matriz.flat(3);
console.log(rta)
console.log(rta2)