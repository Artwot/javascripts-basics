import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

const condition = true;

// Si solo es una instrucción se puede usar en una sola linea 
if (condition) console.log("Yes");
else console.log("No");

const number = 1000;
let result; // undefined

if (number === 1) {
  result = "One";
} else if (number === 99) {
  result = "Ninety-Nine";
} else if (number === 1000) {
  result = "One Thousand";
} else {
  result = "No match";
}

console.log(result);
