'use strict';

// ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ СО СТРАНИЦЫ

const box = document.getElementById('box');//элемент с таким id
console.log(box);

const btns = document.getElementsByTagName('button');//все элементы с таким тэгом(образуется псевдомассив)
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');//все элементы с таким слассом(образуется псевдомассив)
console.log(circles);

const hearts = document.querySelectorAll('.heart');//все элементы с таким селектором(есть методы)
hearts.forEach(item => {
   console.log(item);
});

const oneHeart = document.querySelector('.heart');//Первый элемент с таким селектором
console.log(oneHeart);

const wrapper = document.querySelector('.wrapper');
//hearts = wrapper.querySelectorAll('.hearts');// так еще можно

////////////////////////////////////////////////////////////////////////////////

box.style.backgroundColor = 'blue'; // свойства вписываются в html документ в тэг style(inline свойства)
box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 200px'; // свойства через вписывание как в css

btns[2].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++) {  // почти не используется
//    hearts[i].style.backgroundColor = 'black';
// }

hearts.forEach(item => {
   item.style.backgroundColor = 'black';
});

//////////////////////////////////..................
//добавление элементов на страничку

const div = document.createElement('div');
// const text = document.createTextNode(' я тут быыыыыыыыыыл ');

div.classList.add('black'); //добавляем класс к константе div
//document.body.append(div); //добавляем константу div в конец страницы

wrapper.append(div); //добавляем константу div в конец wrapper
// wrapper.preend(div);//добавляем константу div в начало wrapper

// hearts[0].before(div); //добавляем константу div перед первым элементом hearts
// hearts[0].after(div); //добавляем константу div после первого элемента hearts

// circles[0].remove(); //удаляет элемент

//hearts[0].replaceWith(btns[0]); //заменяет элемент (первый перескакивает на место второго, второй удаляется)

///////////////..........................
//устаревшие методы

// wrapper.appendChild(div); //нет зарницы с современным методом

// wrapper.insertBefore(div, hearts[0]); //типо prepend

// wrapper.removeChild(hearts[1]);

// wrapper.replaceChild(circles[0], hearts[0])

////////////////..........................
//редактирование элемента

div.innerHTML = '<h1>Hello world</h1>'; //добавление html структуры

// div.textContent = 'Hello' //добавление именно текста

div.insertAdjacentHTML('afterend', '<h2>lllllool</h2>');