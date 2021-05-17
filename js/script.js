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
////////////////////////////////////////////////////////

/*function showFirstMessage(text) {
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

const calcul = (c, d, v) => { return (c + d + v); };*/

//МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ
//////////////////////////////////////////////////////////////

/*const str = "text";
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
console.log(parseInt(test));//12
console.log(parseFloat(test));//12.2*/

//CALLBACK FUNCTION
//////////////////////////////////////////////////////////

function first() {
   // do something
   setTimeout(function () {
      console.log(1);
   }, 1);
}

function second() {
   // do something
   console.log(2);
}

first();
second();

/////////////////////////

function learnJS(lang, callback) {
   console.log(`я учу ${lang}`);
   callback();
}

learnJS("JavaScript", function () {
   console.log("Я прошел этот урок!");
});

//OR////////

function learnJS(lang, callback) {
   console.log(`я учу ${lang}`);
   callback();
}

function done() {
   console.log("Я прошел этот урок!");
}

learnJS("JavaScript", done);

//OBJECTS
////////////////////////////////////////////////

const options = {
   name: "test",
   width: 1024,
   height: 1024,
   colors: {
      border: "black",
      bg: "red"
   }
};

// console.log(options.name);

// delete options.name;

// console.log(options);



for (let key in options) {
   if (typeof (options[key]) === "object") {
      for (let key1 in options[key]) {
         console.log(`Свойство ${key1} имеет значение ${options[key][key1]}`);
      }
   } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
   }
}

// получается это:
/*Свойство name имеет значение test
Свойство width имеет значение 1024
Свойство height имеет значение 1024
Свойство border имеет значение black
Свойство bg имеет значение red*/

//////////////////////////////////
//МЕТОДЫ ОБЪЕКТОВ


const options1 = {
   name: "test",
   width: 1024,
   height: 1024,
   colors: {
      border: "black",
      bg: "red"
   },
   makeTest: function () {
      console.log("test"); //метод созданный руками
   }
};

options1.makeTest();

//ДЕВСТРУКТОРИЗАЦИЯ
//////////////////////////
const { border, bg } = options1.colors;
console.log(border);
///////////////////////////

console.log(Object.keys(options1)); //МАССИВ
console.log(Object.keys(options1).length); //КОЛИЧЕСТВО КЛЮЧЕЙ

const onlyfans = {
   Marta: {
      height: 190,
      weight: 80,
      scote: 6
   },
   Melina: {
      height: 161,
      weight: 55,
      scote: 8
   },
   Sasha: {
      height: 170,
      weight: 60,
      scote: 10
   }
};

console.log(Object.keys(onlyfans));
console.log(Object.keys(onlyfans).length);

//МАССИВЫ
///////////////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 7];

/*arr.pop();// удаляет последний элемент массива // [1,2,3,4]
arr.push(4); // [1,2,3,4,7,4]

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]); // просто высветит элементы массива по порядку
}

for (let value of arr) {
   console.log(value);
}*/

arr.forEach(function (item, i, arr) { //эл. массива, инденкс массива, ссылка на массив(callback функция)
   console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("", "");
const projucts = str.split(","); //.split из строки в массив
projucts.sort();//сортирует в алфавитном порядке
console.log(projucts.join(";:  "));//.join из массива в строку

//Сортировка чисел
///////////////////////////////

const arr1 = [1, 22, 33, 4, 7];
arr1.sort(compareNum);
console.log(arr1);

function compareNum(a, b) {
   return a - b;
}

//ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ
/////////////////////////////////////////////////////////////////////

let a = 5,
   b = a;

b = b + 5; // передача по начению
console.log(a);
console.log(b);



const obj = {
   a: 5,
   b: 1
};

const copy = obj; // Передача поссылке

copy.a = 10;

console.log(obj);
console.log(copy);

function copy1(mainObj) { // копирует объект по значению
   let objCopy = {};

   let key;
   for (key in mainObj) {
      objCopy[key] = mainObj[key];
   }

   return objCopy;
}

сonsole.log(copy1(obj));

const numbers = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y: 4
   }
};

const copyNumbers = copy1(numbers);

copyNumbers.a = 222;
copyNumbers.c.x = 222;

console.log(numbers);         //{ a: 2, b: 5, c: { x: 222, y: 4 } }    //Поверхностная копия объекта
console.log(copyNumbers);     //{ a: 222, b: 5, c: { x: 222, y: 4 } }

////////////

const add = {
   d: 17,
   e: 20
};

console.log(Object.assign(numbers, add)); // один объект(правый) в другой(левый) 

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);//слонирование объекта другим образом

/////////////////////Копируем массив
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'sdfsfdf';
console.log(newArray);
console.log(oldArray);


const video = ['yt', 'vimeo', 'rytybe'],
   blogs = ['wp', 'lj', 'blogger'],
   internet = [...video, ...blogs, 'vs', 'facebook']; //совмещаем массивы
console.log(internet);



function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}
const num = [2, 5, 7];
log(...num);//вместо массива делаем 3 значения, которые вставляем в функцию с помощью спрэд оператора



const array = ['a', 'b'];

const newArr = [...array];//копируем массив с помощью спрэд оператора

const q = {
   one: 1,
   two: 2
};

const newq = { ...q };//то же самое, но с объектом

//ПРОТОТИПНО-ОРИЕНТИРОВАННОЕ НАСЛЕДОВАНИЕ

const soldier = {
   health: 400,
   armour: 200,
   sayhello: function () {
      console.log('hello');
   }
},

   john = {
      health: 100
   };

Object.setPrototypeOf(john, soldier);

john.sayhello();//hello от Джона, так как свойство унаследовалось

//OR///////////////

const soldier1 = {
   health: 400,
   armour: 200,
   sayhello: function () {
      console.log('hello');
   }
};

const john1 = Object.create(soldier1); // наследование на этапе создания объекта

john1.sayhello();


//ДИНАМИЧЕСККАЯ ТИПИЗАЦИЯ
////////////////////////////////////////////////////////////////////////
// TO string///////////
//1)
console.log(typeof (String(null))); //string //outdated
console.log(typeof (String(4))); //string
//2)
console.log(typeof (5 + '')); //string


const num2 = 5;
console.log("https://vk.com/catalog/" + num2); // "https://vk.com/catalog/5"

const fontSize = 26 + 'px';

// To Numver///////////
// 1)
console.log(typeof (Number('4'))); // number // outdated

// 2)
console.log(typeof (+'5')); //number

// 3)
console.log(typeof (parseInt('15px', 10)));// number (15)

// To boolean/////////
// 1)

0, '', null, undefined, NaN; //это всё false!!!

let switcher = null;

if (switcher) {
   console.log('working...'); // ничего в консоли
}

// 2)
console.log(typeof (Boolean('4'))); // boolean

// 3)
console.log(typeof (!!'4')); // boolean

//ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ СО СТРАНИЦЫ
//////////////////////////////////////////////////////////////