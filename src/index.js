import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----
// Verifica el tipo de dato de un valor o variable
console.log(typeof 99.66);
// Verifica si el valor es instancia de una clase
console.log(99 instanceof Number);
console.log(Number("99") instanceof Number); // false
// Se crea una nueva instancia de Number, por lo cual retorna true
console.log(new Number("99") instanceof Number);
console.log(Object.prototype.toString.call(99).slice(8, -1) === "Number");

