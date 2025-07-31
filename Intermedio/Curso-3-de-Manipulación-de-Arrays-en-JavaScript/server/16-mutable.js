// const products = [
//     { title: 'Pizza', price: 121, id: '🍕' },
//     { title: 'Burger', price: 121, id: '🍔' },
//     { title: 'Hot cakes', price: 121, id: '🥞' },
// ];

// const myProducts = [];

// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

// const productIndex = products.findIndex(i => i.id === "🍔");
// if (productIndex !== -1){
//     myProducts.push(products[productIndex]);
//     products.splice(productIndex, 1);
// }
// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

// =========================================
//  Update

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const Update ={
    id: "🥞",
    changes: {
        price: 200,
        description: "delicioso"
    }
}

const productIndexV2 = productsV2.findIndex(i => i.id === Update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...Update.changes,
}
console.log(productsV2)
