const totals = [1,2,3,4];

const rta = totals.reduce((sum, Element) => sum + Element, 0);

console.log("Original", totals);
console.log("La suma de los numeros es:", rta);