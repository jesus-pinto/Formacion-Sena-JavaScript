const numbers = [1, 2, 3, 4];

const rta = numbers.some(num => num % 2 === 0);
console.log(rta);

// =========================

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

const rta2 = orders.some(item => item.delivered);
console.log("¿Alguna fue entregada?:", rta2);

// ================================================

const datos = [
    {
        startDate: new Date(2025, 1, 1, 10),
        endDate: new Date(2025, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2025, 1, 1, 15),
        endDate: new Date(2025, 1, 1, 15, 30),
        title: "Cita con mi jefe"
    },
    {
        startDate: new Date(2025, 1, 1, 20),
        endDate: new Date(2025, 1, 1, 15, 21),
        title: "Cena"
    },
    {
        startDate: new Date(2025, 1, 1, 25),
        endDate: new Date(2025, 1, 1, 15, 35),
        title: "Ida al banco"
    },
]

const neewAppointment = {
    startDate: new Date(2025, 1, 1, 24),
    endDate: new Date(2025, 1, 1, 15, 35),
};

const isOverlap = (newDate) => {
    return DataTransfer.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate },
            {start: date.startDate, end: newDate.endDate }
        )
    })
}

console.log(isOverlap(neewAppointment));