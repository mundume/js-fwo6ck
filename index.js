// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const nzai = {
  name: 'Nzai',
  age: 23,
};

console.log(nzai.name);

//Person constructor

function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
}

//constructors
//string
const name1 = 'Jeff';
const name2 = new String(name1);

//console.log(typeof name2);
//numbers constructors
const num1 = 5;
const num2 = new Number(5);
//console.log(typeof num2);

//boolean
const boll = true;
const bool2 = new Boolean(false);
//console.log(bool2)

//functions
function sum(a, b) {
  return a + b;
}
console.log(sum(4, 5));

const sum2 = new Function('a', 'b', 'return a+b');
console.log(sum2(8, 8));
console.log(typeof sum2);

//obj
