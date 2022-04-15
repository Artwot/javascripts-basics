import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----
// Convierte un String en un Integer con base 10
console.log(parseInt("55px", 10));
// Si se escogiera base 2, se hace referencia a un num. binario
console.log(parseInt("0101", 2));

// Convertir un String en Float
console.log(parseFloat("55.9999px") * 10);

// Retorna un valor de 55 elevado a la 10a. potencia
console.log(Number("55e10"));
// Imprime el valor enviado al constructor
console.log(Number("55.9999"));
// Convierte un String a un número y hace la suma mediante el operador + +
console.log(9 + +"99.5555");
// Si solo se usa un operador, se mantiene el tipo String y concatena
console.log(9 + "99.5555");
