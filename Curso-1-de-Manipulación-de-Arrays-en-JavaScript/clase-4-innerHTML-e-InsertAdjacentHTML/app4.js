// crear un nuevo parrafo forma 1---------------
// const contentArea = document.getElementById("contentArea");
// contentArea.innerHTML = "<p> Este es un nuevo parrafo.</p>";

// forma 2 mas recomendada-----------------------
// contentArea.insertAdjacentHTML("beforeend", "<p>Este es otro parrafo nuevo nuevo.</p>");

// =================================================================================

// agregar elementos a una lista forma 1----------
// const listArea = document.getElementById("listArea");
// listArea.innerHTML += ("<li>item 5</li>");

// forma 2 ---------------------------------------
// listArea.insertAdjacentHTML("beforeend", "<li>item 6</>"); 

// ==================================================================================

// crear nueva etiqueta---------------------------
// const newPElement = document.createElement("p");
// newPElement.textContent = "Fui creado con createElement";

// const contentArea = document.getElementById("contentArea");
// contentArea.append(newPElement);

//===================================================================================

// crear elementos al inicio, antes o despues-----
// const newItem = document.createElement("li");
// newItem.textContent = "item 5";
// const listArea = document.getElementById("listArea");
// listArea.prepend(newItem);
//listArea.before(newItem); //antes
// listArea.after(newItem); // despues

//==============================================================================

// Eliminar elementos 
// forma 1
const firstItem = document.querySelector("li");
firstItem.remove();

// forma 2
const list = document.querySelector("ul");
list.removeChild(list.firstElementChild);









