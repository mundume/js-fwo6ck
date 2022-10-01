// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// const nzai = {
//   name: 'Nzai',
//   age: 23,
// };

// console.log(nzai.name);

// //Person constructor

// function Person(name, dob) {
//   this.name = name;
//   this.birthday = new Date(dob);
// }

// //constructors
// //string
// const name1 = 'Jeff';
// const name2 = new String(name1);

// //console.log(typeof name2);
// //numbers constructors
// const num1 = 5;
// const num2 = new Number(5);
// //console.log(typeof num2);

// //boolean
// const boll = true;
// const bool2 = new Boolean(false);
// //console.log(bool2)

// //functions
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(4, 5));

// const sum2 = new Function('a', 'b', 'return a+b');
// console.log(sum2(8, 8));
// console.log(typeof sum2);

// //obj prototype inheritance

// let object = {
//   name: 'kilonzo',
//   city: 'Mariakani',
//   getIntro: function () {
//     console.log(`${this.name} from ${this.city}`);
//   },
// };

// let object2 = {
//   name: 'nzai',
// };
// //never do this
// object2.__proto__ = object;
// console.log(object2.getIntro());

// //object prototypes

// function Person(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// Person.prototype.greeting = function () {
//   return `Hello ${firstName}, ${lastName}`;
// };

// function Customer(first, last, phone, membership) {
//   Person.call(this, first, last);
//   this.phone = phone;
//   this.membership = membership;
// }
// const weee = new Person('mundumeh', 'nzai');

// Customer.prototype = Object.create(Person.prototype);
// Customer.prototype.constructor = Customer;

// const weeduh = new Customer('nzai', 'ndume', '433333', 'food');

// console.log(weeduh);

function Particle() {
  this.x = 100;
  this.y = 99;
  // this.show = function () {
  //   point(this.x, this.y);
  // };
}

Particle.prototype.show = function () {
  point(this.x, this.y);
};
let p = new Particle();
console.log(p);

let p2 = new Particle();
p2.show(point(this.x, this.y));
console.log(p2);
function setup() {
  createCanvas(600, 300);
}
