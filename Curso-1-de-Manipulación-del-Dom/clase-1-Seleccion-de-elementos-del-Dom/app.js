
// const parent = document.getElementById("parent");
// console.log(parent);

// const children = parent.children;
// console.log(children);

// const firstChild = parent.firstElementChild;
// console.log(firstChild);

// const lastChild = parent.lastElementChild;
// console.log(lastChild);

// const previousSibling = parent.previousElementSibling;
// console.log(previousSibling);

// const nextSibling = parent.nextElementSibling;
// console.log(nextSibling);

// ------------------

const children2 = document.querySelector("li");
console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2);

const grandParent = children2.parentElement;
console.log(grandParent)

const grandGrandparent = children2.closest("menu");//Este ultimo es el mas utilizado
console.log(grandGrandparent);