import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

console.log(1 == 1); // true -> se usa para comparar dos variables, pero ignora la base de datos de variables
console.log(1 === 1); // true -> se usa para comparar dos variables, también comprueba el tipo de datos y compara dos valores
console.log(1 == "1"); // true -> convierte ambos valores a String
console.log(1 === "1"); // false -> debido a que no son del mismo tipo

// truthy values
console.log(!!true); // true
console.log(Boolean(true)); // true
console.log(!!{}); // true
console.log(!![]); // true
console.log(!!new Date()); // true
console.log(!!0); // false
console.log(!!"0"); // false
console.log(!!42); // true
console.log(!!-42); // true

// falsy values
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!!0);
console.log(!!NaN);
console.log(!!"");
