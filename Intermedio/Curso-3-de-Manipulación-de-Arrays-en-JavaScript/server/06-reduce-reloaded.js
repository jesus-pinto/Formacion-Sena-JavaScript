const item = [1,3,2,3, 10,10,1];

const rta = item.reduce ((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

// ==========================================

const data = [
    {
        customerName: "Nicolas",
        level: "low",
    },
    {
        customerName: "Zulema",
        level: "medium",
    },
    {
        customerName: "Santiago",
        level: "heigt",
    },
    {
        customerName: "Maria",
        level: "low",
    },
      {
        customerName: "Eva",
        level: "medium",
    },
];

const rtaData = data.map (item => item.level)
.reduce ((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log("Original data", data );
console.log(rtaData);
