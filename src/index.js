import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----
const immutableNumber = 99;
// Solo se almacena el valor de immutableNumber, mas no el tipo
let referencedNumber = immutableNumber;
referencedNumber = 44;
console.log(immutableNumber);
console.log(referencedNumber);

