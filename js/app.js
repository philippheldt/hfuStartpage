const enterRoom = document.querySelector("#enterRoom");
const selectRoom = document.querySelector("#selectRoom");
enterRoom.addEventListener("click", function () {
  console.log("https://rooms.hs-furtwangen.de/rooms/dm" + selectRoom.value);
  window.location.href = "https://rooms.hs-furtwangen.de/rooms/dm" + selectRoom.value;
});

//Selectors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(event) {
  event.preventDefault();

  //Todo DIV Erstellen
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Text einfügen
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todoItem");

  //Text in DIV einfügen
  todoDiv.appendChild(newTodo);

  //Todo in lokalen Speicher hinzufügen
  saveLocalTodos(todoInput.value);

  //delete
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<span class="gg-trash"></span>';
  deleteButton.classList.add("deleteButton");
  todoDiv.appendChild(deleteButton);

  //completed
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<span class="gg-check"></span>';
  completedButton.classList.add("completedButton");
  todoDiv.appendChild(completedButton);

  //zur liste hinzufügen
  todoList.appendChild(todoDiv);

  //Eingabe löschen
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //delete
  if (item.classList[0] === "deleteButton") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //complete
  if (item.classList[0] === "completedButton") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//Funktion fürs lokale speichern
function saveLocalTodos(todo) {
  //gibts schon gespeicherte ToDos?
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  localStorage.setItem("todos", JSON.stringify(todos));

  todos.forEach(function (todo) {
    //Todo DIV Erstellen
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Text einfügen
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todoItem");

    //Text in DIV einfügen
    todoDiv.appendChild(newTodo);

    //delete
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<span class="gg-trash"></span>';
    deleteButton.classList.add("deleteButton");
    todoDiv.appendChild(deleteButton);

    //completed
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<span class="gg-check"></span>';
    completedButton.classList.add("completedButton");
    todoDiv.appendChild(completedButton);

    //zur liste hinzufügen
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
