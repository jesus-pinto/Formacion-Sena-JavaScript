// clonar-------------------------------------------------
const  contentArea = document.querySelector("#contentArea");
const originalP = contentArea.querySelector("p");

const clonedP = originalP.cloneNode(true);

contentArea.append(clonedP);
clonedP.textContent = "Este es un nuevo texto";
// ==============================================

const list = document.querySelector("#listArea");
const itemToReplace = list.children[2];
itemToReplace.replaceWith(clonedP);

// ========================================




