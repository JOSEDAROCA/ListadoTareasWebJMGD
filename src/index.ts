import "./styles.css";

// Seleccionar los elementos HTML que necesitamos
let input = document.getElementById("tarea");
let boton = document.getElementById("boton");
let tareas = document.querySelector("ul");

//CUando se haga click en el boton
boton.addEventListener("click", () => {
  //Obtenr lo que hay escrito en el input
  let tarea = input.value;
  console.log(tarea);
  //Agregarlo como un nueno elemento <li>
  let li = document.createElement("li");
  li.textContent = tarea;
  tareas.appendChild(li);
});
