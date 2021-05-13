"use strict";

/*let number = 88.3;

const person = "Alex";

const bool = true;

const obj = {
   name: "jeny",
   age: 22,
   isMarried: false
};

console.log(obj["name"]);

let arr = [1, 4, 6, 4];

console.log(arr[2]);

//const result = confirm("person");
//console.log(result);

// const ans = prompt("are you 18?", "da");
// console.log(typeof (ans));

const answers = [];

answers[0] = prompt("ты кто?", "");
answers[1] = prompt("ты что?", "");
answers[2] = prompt("ты как?", "");

document.write(answers);

//интерполяция
/////////////////////////////////////////////////

const category = "games";

console.log(`htpps://url.com/${category}/5`);

const user = "Jeny"

alert(`Здравствуй, ${answers[0]}`)

//инкримент и декримент
////////////////////////////

let incr = 10,
   decr = 10;

incr++;
decr--;

console.log(incr, decr);

console.log(2 % 1 == 0);

//операторы
/////////////////////////////

! - отрицание;
&& - "и";
|| - "или";

//CICLYES
/////////////////////////////////////////////////
*/
/*
const a = +prompt("Введи число"),
   b = prompt("Введи операцию"),
   c = +prompt("Введи число");

let d;

if (b == "*") {
   d = a * c;
} else if (b == "+") {
   d = a + c;
}

document.write(d);

const num = 50;

switch (num) {
   case 49: //cстрогое сравнение
      console.log("no");
      break;
   case 100:
      console.log("no");
      break;
   case 50:
      console.log("yes");
      break;
   default:
      console.log("not working");
      break;
}*/
////////////////////////////////
/*
let num = 50;

while (num < 55) {
   console.log(num);
   num++;
}

//тоже самое но другой синтаксис

do {
   console.log(num);
   num++;
}
while (num < 55);


for (let i = 1; i < 8; i++) {
   console.log(i);
}*/

//FUNCTIONS
//////////////////////////////////////

function showFirstMessage(text) {
   console.log(text);
   let num = 20; //локальная переменная
}

showFirstMessage("Hello World!");

function calc(a, b) {
   return (a * b);
}
console.log(calc(6, 6));

function ret() {
   let num = 60;
   return (num);
}

const anotherNum = ret();
console.log(anotherNum);

//////////////////////////////

const logger = function () {
   console.log("lool");
};

logger();

/////////////////////////////

const calcul = (c, d, v) => { return (c + d + v); };

//МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ
//////////////////////////////////////////////////////////////

const str = "text";

console.log(str.toUpperCase());

const fruit = "some sfruit";

console.log(fruit.indexOf("fruit")); // с 5 позиции начинается это слово (называется поиск подстроки)

const logg = "Hello world";

console.log(logg.slice(6, 11));

console.log(logg.substring(11, 6));// тож самое но без отрицательных и первый арг может быть больше второго

console.log(logg.substr(6, 5));// первый арг - начало обрезания, второй - длина обрезания



const num = 12.2;

console.log(Math.round(num));//12

const test = "12.2px";
console.log(parseInt())