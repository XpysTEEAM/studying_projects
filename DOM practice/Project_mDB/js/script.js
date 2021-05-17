/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
   movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
   ]
};

const baners = document.querySelectorAll('.promo__adv img'),
   bg = document.getElementsByClassName('promo__bg'),
   genre = bg[0].querySelector('.promo__genre'),
   list = document.querySelector('.promo__interactive-list');


baners.forEach(baner => {
   baner.remove();
});

genre.innerHTML = "драма";

bg[0].style.backgroundImage = 'url(img/bg.jpg)';


list.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => { // то шо я сделал, не оч эффективно тип
   const li = document.createElement('li');
   li.classList.add('promo__interactive-item');
   li.textContent = `${i + 1}) ` + item;
   list.append(li);
});

movieDB.movies.forEach((item, i) => {
   list.innerHTML += `
      <li class="promo__interactive-item"> ${i + 1}) ${item}
         <div class="delete"></div>
      </li>
   `;
});

// let li = document.createElement('li');

// li.classList.add('promo__interactive-item');

// for (let i = 0; i < 5; i++) {
//    li.textContent = film;
//    list.append(li);

// }



