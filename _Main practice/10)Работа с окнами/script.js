'use strict';

const box = document.querySelector('.box'),
   btn = document.querySelector('button');

const width = box.clientWidth; // ширина и высота без маргинов и бордеров
const height = box.clientHeight;

const width1 = box.offsetWidth; // ширина и высота видимого окна полностью
const height1 = box.offsetHeight;

const width2 = box.scrollWidth; // ширина и высота скролла полностью, без самого скролла
const height2 = box.scrollHeight;

console.log(width2, height2);

btn.addEventListener('click', () => {
   // box.style.height = `${height2}px`; // высота блока равна высоте скролла
   console.log(box.scrollTop);
});


const style = window.getComputedStyle(box); //стили элемента, которые сейчас применены к элементу(можно только прочитать)
console.log(style.display);


console.log(document.documentElement.scrollTop);