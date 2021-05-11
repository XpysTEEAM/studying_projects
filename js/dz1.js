
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const lastMovie = [],
   rating = [];

lastMovie[0] = prompt("Один из последних просмотренных фильмов?", "");
rating[0] = prompt("На сколько оцените его?", "");
lastMovie[1] = prompt("Один из последних просмотренных фильмов?", "");
rating[1] = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastMovie[0]] = rating[0];
personalMovieDB.movies[lastMovie[1]] = rating[1];

console.log(personalMovieDB);