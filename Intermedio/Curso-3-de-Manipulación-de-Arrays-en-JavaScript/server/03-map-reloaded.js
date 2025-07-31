const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Maria",
        total: 240,
        delivered: true,
    },

];

console.log("original", orders);

const rta = orders.map(item => item.total)
console.log("rta", rta);

// const rta2 = orders.map(item => {
//     item.tax = .19;
//     return item;
// });

// console.log("rta2", rta2);
// console.log("original", orders);

const rta3 = orders.map((item) => {
    return {
        ...item,
        tax: .19
    };
});

console.log("rta3", rta3);
console.log("original", orders);


// ===================================================
//  Yo!!!!!!!!!!

const lista = [
    {
        nombre: "Jesus",
        apellido: "Pinto",
        edad: 21,
    },
    {
        nombre: "Anyelik",
        apellido: "Campos",
        edad: 10,
    },
    {
        nombre: "Eva",
        apellido: "Villegas",
        edad: 7
    },
];

console.log("Original", lista);

const info = lista.map(datos => datos.nombre);
console.log("Nombres", info);

const datosNu = lista.map((datos) => {
    return{
        ...datos,
        nacionalidad: "VNZ"
    };
});

console.log("nacionalidad", datosNu);
console.log("original", lista );