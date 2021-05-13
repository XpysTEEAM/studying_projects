/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};
/*
const lastMovie = [],
   rating = [];

for (let i = 0; i < 2; i++) {
   lastMovie[i] = prompt("Один из последних просмотренных фильмов?", "");
   while (lastMovie[i] == "" || lastMovie[i] == null || lastMovie[i].length > 51) {
      alert("Error!");
      lastMovie[i] = prompt("Один из последних просмотренных фильмов?", "");
   }
   rating[i] = prompt("На сколько оцените его?", "");
   while (rating[i] == "" || rating[i] == null || rating[i].length > 51) {
      alert("Error!");
      rating[i] = prompt("Один из последних просмотренных фильмов?", "");
   }
   personalMovieDB.movies[lastMovie[i]] = rating[i];

}*/

/*
let lastMovie = "",
   rating = "",
   i = 0;

while (i != 2) {
   lastMovie = prompt("Один из последних просмотренных фильмов?", "");
   rating = prompt("На сколько оцените его?", "");
   i++;
   if (lastMovie != null && rating != null && lastMovie != "" && rating != "" && lastMovie.length < 50 && rating.length < 50) {
      personalMovieDB.movies[lastMovie] = rating;
   } else {
      alert("Error!");
      i--;
   }
}*/

for (let i = 0; i < 2; i++) {
   const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
   rating = prompt("На сколько оцените его?", "");

   if (lastMovie != "" && lastMovie != null && lastMovie < 50 && rating != "" && rating != null) {
      personalMovieDB.movies[lastMovie] = rating;
   } else {
      i--;
      alert("Произошла ошибка!")
   }
}


if (personalMovieDB.count <= 10 && personalMovieDB.count >= 0) {
   alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.counts < 30) {
   alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
   alert("Вы киноман");
} else {
   alert("Произошла ошибка!");
}


console.log(personalMovieDB);