"use strict";

//filter

const names = ['Ivan', 'Ann', 'Jenya', 'Alexander'];

const shortNames = names.filter(function (name) {
   return name.length <= 5;
});

console.log(shortNames); //[ 'Ivan', 'Ann', 'Jenya' ]

// map

let answers = ['IvAn', 'AnnA', 'HellO'];

answers = answers.map(item => item.toLowerCase()); // меняет как-то содекжание массива

console.log(answers); //[ 'ivan', 'anna', 'hello' ]

// every/some

const some = [4, 'qwq', 'rwerwe'];

console.log(some.some(item => typeof (item) === 'number')); // true //возвращает boolean (хотя бы один)

console.log(some.every(item => typeof (item) === 'number')); // false // все

//reduce

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current/*, 3*/);// 3 - начальное значение(sum)

console.log(res);

const arr1 = ['apple', 'pear', 'plum'];

const res1 = arr1.reduce((sum, current) => `${sum}, ${current}`);

console.log(res1);

/////////////////////////////////////example

const obj = {
   ivan: 'person',
   ann: 'person',
   dog: 'animal',
   cat: 'animal'
};

const newArr = Object.entries(obj) // из объекта в массив с массивами
   .filter(item => item[1] === 'person')
   .map(item => item[0]);

console.log(newArr); //[ 'ivan', 'ann' ]