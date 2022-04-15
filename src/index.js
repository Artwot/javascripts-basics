import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

// ----
const number = 1;
const result = 'The Number is: ' + (number === 1 ? 'One' : 'No Match');

console.log(result);

// Se pueden anidar los operadores ternarios, algo similar a else if
const anotherNumber = 99;
const anotherResult =
  anotherNumber === 1
    ? 'One'
    : anotherNumber === 99
    ? 'Ninety-Nine'
    : anotherNumber === 1000
    ? 'One Thousand'
    : 'No Match';

console.log(anotherResult);
