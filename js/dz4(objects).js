/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания


/*function start() {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
      alert("Неверные данные");
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
   }
}*/



const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");

      while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         alert("Неверные данные");
         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
      }
   },
   rememberMyFilms: function () {
      for (let i = 0; i < 2; i++) {
         const lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
            rating = prompt("На сколько оцените его?", "");

         if (lastMovie != "" && lastMovie != null && rating != "" && rating != null) {
            personalMovieDB.movies[lastMovie] = rating;
         } else {
            i--;
            alert("Произошла ошибка!");
         }
      }
   },
   detectPersonalLevel: function () {
      if (personalMovieDB.count <= 10 && personalMovieDB.count >= 0) {
         alert("Просмотрено довольно мало фильмов");
      } else if (personalMovieDB.count > 10 && personalMovieDB.counts < 30) {
         alert("Вы классический зритель");
      } else if (personalMovieDB.count >= 30) {
         alert("Вы киноман");
      } else {
         alert("Произошла ошибка!");
      }
   },
   showMyDB: function (hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   writeYourGenres: function () {
      for (let i = 1; i < 2; i++) {
         let write = prompt(`Ваши любимые жанры через запятую:`, "");


         /*if (write != "" && write != null && write.length < 50) {
            personalMovieDB.genres[i] = write;
         } else {
            i--;
            alert("Произошла ошибка!");
         }*/
         while (write == "" || write == null || write > 50) {
            alert("Произошла ошибка!");
            write = prompt(`Ваши любимые жанры через запятую:`, "");
         }
         personalMovieDB.genres = write.split(', ');

      }
      personalMovieDB.genres.forEach(function (item, n, genres) {
         console.log(`Любимый жанр #${n + 1} - это ${item}`);
      });
   },
   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   }
};
//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();
//personalMovieDB.toggleVisibleMyDB();
//personalMovieDB.showMyDB(personalMovieDB.privat);
//personalMovieDB.writeYourGenres();

alert(2 && 1);
console.log(2 && 54);
// console.log(personalMovieDB);


