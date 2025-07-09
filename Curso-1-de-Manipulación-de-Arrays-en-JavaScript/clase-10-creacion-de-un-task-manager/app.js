const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

loadTasks();

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskInput = document.getElementById("task-input");
  const task = taskInput.value.trim();

  if (!task) return;

  // Crear nuevo <li>
  const li = document.createElement("li");
  li.innerHTML =
    task +
    '<div class="actions">' +
    '<span class="delete-btn">Borrar |</span>' +
    '<span class="edit-btn">Editar</span>' +
    '</div>';
  taskList.appendChild(li);
  storeTaskInLocalStorage(task);
  taskInput.value = "";
});

// Delegar eventos para borrar o editar
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const li = event.target.closest("li");
    deleteTask(li);
  } else if (event.target.classList.contains("edit-btn")) {
    const li = event.target.closest("li");
    editTask(li);
  }
});

function deleteTask(taskItem) {
  if (confirm("¿Estás segura/o de borrar esta tarea?")) {
    taskItem.remove();
  }
}

// elimina todo definitivamente
const clearBtn = document.getElementById("clear-tasks");

clearBtn.addEventListener("click", () => {
  if (confirm("¿Quieres borrar todas las tareas?")) {
    localStorage.removeItem("tasks"); // Borra todas las tareas guardadas
    taskList.innerHTML = ""; // Limpia la lista visual
  }
});

function editTask(taskItem) {
  // El texto está antes del <div class="actions">
  const textNode = taskItem.childNodes[0]; // primer nodo de texto
  const newTask = prompt("Edita la tarea:", textNode.textContent.trim());
  if (newTask !== null) {
    textNode.textContent = newTask + " ";
    updateLocalStorage();
  }
}

function storeTaskInLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach((task) => {
    taskList.appendChild(taskList.appendChild(li))
  });
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML =
      task +
      '<div class="actions">' +
        '<span class="delete-btn">Borrar |</span>' +
        '<span class="edit-btn">Editar</span>' +
      '</div>';
    taskList.appendChild(li);
  });
}

function updateLocalStorage(){
  const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => 
    li.firstChild.textContent
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// modo oscuro
const darkBtn = document.querySelector(".btn-1"); // botón modo oscuro
const lightBtn = document.querySelector(".btn-2"); // botón modo claro

const currentTheme = localStorage.getItem("theme");

// Aplica el tema guardado al cargar la página
if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}

// Activar modo oscuro al hacer clic en btn-1
darkBtn.addEventListener("click", () => {
  document.body.classList.add("dark-theme");
  localStorage.setItem("theme", "dark");
});

// Activar modo claro al hacer clic en btn-2
lightBtn.addEventListener("click", () => {
  document.body.classList.remove("dark-theme");
  localStorage.setItem("theme", "light");
});
