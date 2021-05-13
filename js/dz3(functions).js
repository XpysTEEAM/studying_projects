/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
      alert("Неверные данные");
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
         rating = prompt("На сколько оцените его?", "");

      if (lastMovie != "" && lastMovie != null && lastMovie < 50 && rating != "" && rating != null) {
         personalMovieDB.movies[lastMovie] = rating;
      } else {
         i--;
         alert("Произошла ошибка!");
      }
   }
}

// rememberMyFilms();

function detectPersonalLevel() {
   if (personalMovieDB.count <= 10 && personalMovieDB.count >= 0) {
      alert("Просмотрено довольно мало фильмов");
   } else if (personalMovieDB.count > 10 && personalMovieDB.counts < 30) {
      alert("Вы классический зритель");
   } else if (personalMovieDB.count >= 30) {
      alert("Вы киноман");
   } else {
      alert("Произошла ошибка!");
   }
}

// detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);

// console.log(personalMovieDB);
let n = 1;
function writeYourGenres() {
   for (let i = 1; i < 4; i++) {
      let write = prompt(`Ваш любимый жанр под номером ${i}`, "");


      /*if (write != "" && write != null && write.length < 50) {
         personalMovieDB.genres[i] = write;
      } else {
         i--;
         alert("Произошла ошибка!");
      }*/
      while (write == "" || write == null || write > 50) {
         alert("Произошла ошибка!");
         write = prompt(`Ваш любимый жанр под номером ${i}`, "");
      }

      personalMovieDB.genres[i - 1] = write;
   }
}

writeYourGenres();