import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----
// literal
const literalNumber = 99;
console.log(literalNumber);

// sintaxis de función
// realiza una conversión dentro de un contexto de no-constructor
console.log(Number(55));
console.log(Number('33'));
console.log(Number('44px'));  // retorna 'NaN'

// sintaxis de constructor, crea un objeto contenedor
// avoid using it
console.log(new Number('44px'));
