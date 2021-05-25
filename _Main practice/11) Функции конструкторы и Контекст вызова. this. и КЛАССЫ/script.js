//ФУНКЦИИ КОНСТРУКТОРЫ
///////////////////////////////////////////////////////////////
/*
function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function () {
      console.log(`Hello ${this.name}`)
   };
}

User.prototype.exit = function () { // у всех созданных после этого метода потомков будет этот метод
   console.log(`Пользователь ${this.name} ушёл`)
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

alex.exit();

ivan.hello();

console.log(ivan);

//////////////////////////////////////////////////////////////
//КОНТЕКСТ ВЫЗОВА. THIS.
//1)
function showThis() {
   console.log(this); //undefined, если есть use strict, показывает всю область действия, то есть window
}

showThis();

//task

function showThis1(a, b) {
   console.log(this); // undefined
   function sum() {
      console.log(this); // undefined
      return this.a + this.b; // a of undefined, b of undefined
   }

   console.log(sum());
}

showThis1(4, 5);

//2)////////////////////

const obj2 = {
   a: 20,
   b: 15,
   sun: function () {
      console.log(this)
      // HO
      function shout() {
         console.log(this);
      }
      shout(); // undefined (вызываем не метод объеста, а функцию внутри метода, поэтому контекст вызова теряется)
   }
};
obj.sum(); //Если контекст вызова внутри метода объеста, то он ссылается на объект

//3)////////////////////

function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;

}// this в конструкторах и слассах - это новый экземпляр объекта

const ivan1 = new User('Ivan', 28);

//4)/////////////////////

function sayName(surname) {
   console.log(this);
   console.log(this.name + surname);
}

const user = {
   name: 'john'
};

sayName.call(user, 'Smith');// в русную передаём контекст //4.1
sayName.apply(user, ['Smith']);// отличия у этих 2х только в синтаксисе //4.2

function count(num) {
   return this * num;
}

const double = count.bind(2); // создаёт новую функцию с контекстом в скобках //4.3
console.log(double(2)); //4
console.log(double(13)); //26
*/

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
   console.log(this); // ссылается на кнопку в html
});

btn.addEventListener('click', () => {
   console.log(this); // у стрел ф-ции нет контекста, поэтому undefined(или window)
});


const obj = {
   num: 5,
   sayNumber: function () {
      const say = () => {
         console.log(this);
      }
      say();
   }
};

obj.sayNumber(); // obj{} //у стрелочной функции нет своего контекста, она берёт контекст у метода, а метод берёт контекст у объекта

const double = a => a * 2; // если функция в одну строчку, то ее можно сократить вот так(return сам подставляется)

///////////////////////////////////////////////////////////
//КЛАССЫ

class Rectangle {
   constructor(height, width) {
      this.height = height;
      this.width = width;
   }

   calcArea() {
      return this.height * this.width;
   }
}

class ColoredReactangleWithText extends Rectangle { // наследование
   constructor(height, width, text, bgColor) {
      super(height, width); //вызывает содержимое конструктора родителя
      this.text = text;
      this.bgColor = bgColor;
   }

   showMyProps() {
      console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
   }
}

const superSquare = new ColoredReactangleWithText(200, 1000, 'жопа довафжыва жолдывалдофыволаол ыфв', '#0e0e0e');

superSquare.showMyProps();
console.log(superSquare.calcArea());

const square = new Rectangle(10, 10);

console.log(square.calcArea());