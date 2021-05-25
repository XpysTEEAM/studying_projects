// const timeId = setTimeout(function () {
//    console.log('Hello')
// }, 2000);

//OR

// const timeId = setTimeout(logger, 2000);

// clearInterval(timeId); //сбрасывает таймер(удаляет)

// function logger() {
//    console.log('Hello')
// }

//////////////////////////////////

const btn = document.querySelector('.btn');
let timerId,
   i = 0;

function myAnimation() {
   const elem = document.querySelector('.box');
   let pos = 0;

   const id = setInterval(frame, 10);
   function frame() {
      if (pos == 300) {
         clearInterval(id);
      } else {
         pos++;
         elem.style.top = pos + 'px';
         elem.style.left = pos + 'px';
      }
   }
}

// btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//    // const timerId = setTimeout(logger,2000);
//    timerId = setInterval(logger, 500); //постоянно повторяющееся действие
// }); // интервалу всё равно как долго выполняется его функция, если, например ф-я вып. 3 с, а интервал 0.5 с, то эт плохо
// // поэтому используют рекурсию setTimeout



// function logger() {
//    if (i == 3) {
//       clearInterval(timerId); //сбрасывает таймер(удаляет)
//    }
//    console.log('Hello');
//    i++;
// }

// let id = setTimeout(function log() {
//    console.log('hello');
//    id = setTimeout(log, 500);
// }, 500);

/////////////////////////////
//DATES

const now = new Date('2021-05-21');//можно передать дату, чтобы например в input отобразит её
new Date.parse('2021-05-21'); // тоже самое

// const now1 = new Date('2021-05-21');
// const now3 = new Date(-999999999999999);
// const now2 = new Date(2021, 5, 21, 20);// 2021-06-21T17:00:00.000Z // месяцы с 0, часы по часовому поясу
// все даты хранятся в миллисекундах, начиная отсчёт с 01.01.1970

console.log(now);

//ПОЛУЧЕНИЕ КОМПОНЕНТОВ ДАТЫ
console.log(now.getFullYear());
console.log(now.getMonth()); //4
console.log(now.getDate());
console.log(now.getDay());//день недели, воскресенье это 0
console.log(now.getHours());//14
console.log(now.getUTCHours());//11

console.log(now.getTimezoneOffset());//разница в минутах между моим и 0 часовыми поясами
console.log(now.getTime()); // количество миллисекунд с 01.01.1970

// УСТАНОВКА КОМПОНЕНТОВ ДАТЫ(те же команды, только с set)
console.log(now.getHours(18));//в консоли по UTC, в браузере по локальному времени

///////////////////////////////

let start = new Date();

for (let i = 0; i < 1000000; i++) {
   let some = i ** 3;
}

let end = new Date();

console.log(`цикл отработал за ${end - start} миллисекунд`) // время выполнения цикла(бенчмарк)

///////////////////////////////