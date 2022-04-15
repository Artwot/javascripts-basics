import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----
const result = Number('55px');

// isNaN Retorna un valor true o false según el argumento enviado 
console.log(isNaN(result));
console.log(isNaN('I am a String!'));

// El método NaN de Number retorna un boolean según el argumento enviado
console.log(Number.NaN);
console.log(Number.isNaN(result));
console.log(Number.isNaN('I am another String!'));
console.log(Number.isNaN(Number.NaN));

// Verifica cuando un Numero es de tipo Integer
console.log(Number.isInteger(66));

