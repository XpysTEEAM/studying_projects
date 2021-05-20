//touchstart - нажатие
//touchmove
//touchend
//touchenter - ведём по экрану и поподаем на эл.
//touchleave
//touchcancel

//touches - показывает количество пальцев на экране
//targetTouches - количество тачей конкретно на элементе
//changedTouches - количество пальцев, которые совершили нужное действие

window.addEventListener('DOMContentLoaded', () => {
   const box = document.querySelector('.box');

   box.addEventListener('touchstart', (e) => {
      e.preventDefault();
      console.log('sssssss');
      console.log(e.touches);
   });

   box.addEventListener('touchmove', (e) => {
      e.preventDefault();
      console.log('move');
   });

   box.addEventListener('touchend', (e) => {
      e.preventDefault();
      console.log('end');
   });
});