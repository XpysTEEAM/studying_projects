/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики


document.addEventListener('DOMContentLoaded', () => {

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
      list = document.querySelector('.promo__interactive-list'),
      add = document.querySelector('.add'),
      addingImput = add.querySelector('.adding__input'),
      checkbox = add.querySelector("[type = checkbox]");



   baners.forEach(baner => {
      baner.remove();
   });

   genre.innerHTML = "драма";

   bg[0].style.backgroundImage = 'url(img/bg.jpg)';


   add.addEventListener("submit", (event) => {
      event.preventDefault();
      let newFilm = addingImput.value;
      const favourite = checkbox.checked;

      if (newFilm) {

         if (newFilm.length > 21) {
            newFilm = `${newFilm.substr(0, 21)}...`;
         }

         if (favourite) {
            console.log('Добавляем любимый фильм');
         }

         newFilm = newFilm.toUpperCase();
         movieDB.movies.push(newFilm);
         movieDB.movies.sort();
         createMovieList(movieDB.movies, list, deleteMovie);
         event.target.reset();
      } else {
         alert('Вы не ввели фильм!');
      }
   });

   // movieDB.movies.sort();

   // movieDB.movies.forEach((item, i) => { // то шо я сделал, не оч эффективно тип
   //    const li = document.createElement('li');
   //    li.classList.add('promo__interactive-item');
   //    li.textContent = `${ i + 1})` + item;
   //    list.append(li);
   // });
   function createMovieList(childs, parent, callback) {
      list.innerHTML = '';
      childs.forEach((item, i) => {
         parent.innerHTML += `
         <li class="promo__interactive-item" > ${i + 1}) ${item}
            <div class="delete"></div>
         </li>
         `;
      });
      callback();
   }

   function deleteMovie() {
      const deleteIcon = list.querySelectorAll('.delete');
      deleteIcon.forEach((item, i) => {
         item.addEventListener('click', e => {
            e.target.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(movieDB.movies, list, deleteMovie);
         });
      });
   };

   createMovieList(movieDB.movies, list, deleteMovie);

});