import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----
// Imprime el prototipo del objeto
console.log(Number.prototype);
// Toma los métodos pertenecientes al objeto Number
console.log(parseFloat((99.12345678).toFixed(4)));
console.log((99.12345678).toPrecision(5));
console.log(new Number(99).valueOf());