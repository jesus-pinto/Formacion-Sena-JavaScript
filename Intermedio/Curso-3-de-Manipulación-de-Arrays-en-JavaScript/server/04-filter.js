const words = ["spray", "limit", "elite", "exuberant", "dos"];

const rta = words.filter(item => item.length >= 6)
console.log("rta", rta);
console.log("original", words);

// =======================================================

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
        total: 130,
        delivered: false,
    },
    {
        customerName: "Mariano",
        total: 240,
        delivered: true,
    },
];

const rta3 = orders.filter(item => item.delivered && item.total >=120);
console.log("rta3", rta3);

// ======================================================

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search("Mari"));
