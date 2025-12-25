// day 1
// variables datatypes operations

const name = "muhammed faris";

let age = 22;

let add = 1 + 1;

let sub = 1 - 1;

let mult = 1 * 1;

let divid = 1 / 1;

let expon = 1 ** 1;

console.log(add, sub, mult, divid, expon, "name : ", name, "age : ", age);

let obj = {
  car: "ferrary",
  bike: "bmw",
  phone: "iphone",
  pin: null,
  address: undefined,
};

console.log("object", obj);

let arr = [String, Boolean, Number, NaN];

console.log("array :", arr);

function multiplication(a, b) {
  return a * b;
}

console.log("function :", multiplication(50, 60));

if (1 > 10 || 2 < 10) {
  console.log(true);
} else {
  console.log(false);
}

if (1 < 10 && 2 < 10) {
  console.log(true);
} else {
  console.log(false);
}

let total = null;
let optionalChaining = total?.name;

console.log(optionalChaining);

let a = 10,
  b = 20;
let op = "-";
switch (op) {
  case "*":
    console.log(a * b);
    break;
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
  case "/":
    console.log(a / b);

  default:
    undefined;
}

let ternary = 10 > 20 ? "hello" : "world";
console.log(ternary);

let nullish = null;

console.log(nullish ?? "faris");
