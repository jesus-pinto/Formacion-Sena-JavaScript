const container = document.querySelector(".container");
const button = document.getElementById("btn");

// =============================================
// crea un over
container.addEventListener ("mouseover", () => { 
    container.style.backgroundColor = "blue";
});

container.addEventListener ("mouseout", () => {
    container.style.backgroundColor = "red";
});

// ============================================

// button.addEventListener("click", () => {
//     alert("button clicked!");
// });
// ==============================================

// crea el evento
const buttonClickCallBack = () => {
    alert("Button clicke!");
};

// añade el evento
button.addEventListener("click", buttonClickCallBack);

// quita el evento 
setTimeout(() => {
    button.removeEventListener("click", buttonClickCallBack);
}, 2000);