const numbers = [1,30,49,29,10,13];

const rta = numbers.find(item => item === 30);
console.log("Encontrada:", rta)

// ================================

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

// ver si existe o si hay un id con 🌭
const comidas = products.find(item => item.id === "🌭")
console.log("Encontrada:", comidas);

// ver en que pocision esta
const comidas2 = products.findIndex(item => item.id === "🌭")
console.log("Encontrada en la pocision:", comidas2);