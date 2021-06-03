'use strict';
// localStorage используется, например, чтобы запомнить тайминг видео на ютубе, чтобы потом продолжить с 
// этого тайминга, или для настроек сайта под себя. Эти данные останутся даже после закрытия браузера

// localStorage.setItem('number', 5); // задаём данные в Локальное хранилище

// localStorage.removeItem('number');// удаляем нужный item
// localStorage.clear();// удаляем всё

// console.log(localStorage.getItem('number')); // можем получить их

const checkbox = document.querySelector('#checkbox'),
   form = document.querySelector('form'),
   change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
   checkbox.checked = true;
} else {
   localStorage.clear();
}

checkbox.addEventListener('change', () => {
   localStorage.setItem('isChecked', true);
   if (checkbox.checked) {
      localStorage.setItem('isChecked', false);
   }
});

if (localStorage.getItem('bg') === 'changed') {
   form.style.backgroundColor = 'red';
}

change.addEventListener('click', () => {
   if (localStorage.getItem('bg') === 'changed') {
      localStorage.removeItem('bg');
      form.style.backgroundColor = 'white';
   } else {
      localStorage.setItem('bg', 'changed');
      form.style.backgroundColor = 'red';
   }
});

const person = {
   name: 'Alex',
   age: 25
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem('alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('alex')));

/////////////////////////////////////////////////////////////
//REGEXP

// new RegExp('pattern', 'flags');// not used
// /pattern/f

const ans = prompt('Put on your name');

const reg = /n/ig;
const reg1 = /\d/;

console.log(ans.match(reg1));

// console.log(reg.test(ans));// если есть в ans паттерн от reg, тогда выдаст true, если нет, то false
// i - вне зависимости от регистра
// g - пытаемся найти сразу несколько вхождений
// m - многострочный режим


const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

console.log(str.match(/\W/g)); // [ ' ', ' ', ' ' ] // все не буквы

//classes of regExp
// \d - ищем цифры
// \w - ищем буквы
// \s - ищем пробелы

// upside down classes
// \D - ищем не цифры
// \W - ищем не буквы

// console.log(ans.search(reg)); // выдаёт номер заданной буквы(только первой найденной)
console.log(ans.match(reg)); //ig //nnNN //(4) ["n", "n", "N", "N"]


const pass = prompt('Password');

console.log(pass.replace(/./g, "*")); // заменяем все введённые символы на * (в консоли одни *)
// . - спец символ, выделяет все введённые буквы(можно выделять именно точку при помощи \.)

console.log('12-34-56'.replace(/-/g, ':'));


