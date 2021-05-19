//ОБРАБОТЧИКИ СОБЫТИЙ

const btn = document.querySelector('button');
/*
btn.onclick = function () { //не используется, не удобно
   alert('dfssdf');
};
btn.onclick = function () { //теряется первая функция
   alert('dfssdf 222');
};

btn.addEventListener('click', () => {
   alert('dfssdf');
});

btn.addEventListener('click', () => { //все ок, выводится первая, потом вторая
   alert('dfssdf 222');
});*/

///////////////////////////

let i = 0;
const deleteElement = (event) => { //в callback функцию передаем event, чтобы посмотреть с каким объектом работаем и что делаем с ним
   console.log(event.target);
   i++;
   if (i == 2) {
      btn.removeEventListener('click', deleteElement);//удаляем обработчик события после 2х кликов
   }
};

btn.addEventListener('click', deleteElement);

/////////////////////////

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
   event.preventDefault();// отменяет стандартное поведение браузера(тут не сработает ссылка), нужно писать в начале обработчика
   console.log(event.target);
});

btn.addEventListener('click', deleteElement, { once: true }); //есть 3 аргумент - это опция, допустим здесь это нажатие, потом он проподает
