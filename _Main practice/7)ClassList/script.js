//CLASSLIST
//////////////////////////////////////////////////////////////

const btns = document.querySelectorAll('button'),
   wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); //количество классов у элта
// console.log(btns[0].classList.item(0));// blue //класс элеметна под номером i
// console.log(btns[1].classList.add('red', 'sdfsfdf')); //добовляет класс
// console.log(btns[0].classList.remove('red')); // удаляет класс
// console.log(btns[0].classList.toggle('red')); // если был такой сласс, то удаляет его, если не было, то добавляет его

// if (btns[1].classList.contains('red')) { // проверяет есть ли данный класс на данном элементе
//    console.log('red');
// }

btns[0].addEventListener('click', () => { // по клику на первую кннопку добавляем или удаляем класс у второй
   // if (!btns[1].classList.contains('red')) {
   //    btns[1].classList.add('red');
   // } else {
   //    btns[1].classList.remove('red');
   // }
   btns[1].classList.toggle('red');
});

// console.log(btns[0].className); //все классы элеменка в одну строчку(не удобно, устарело)

//ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
//////////////////////////////////

wrapper.addEventListener('click', (event) => {
   if (event.target && event.target.tagName == 'BUTTON') { //не все эл-ты поддерживают событие клика(<br>), у него нет event.target, поэтому проверяем его существование
      console.log('horosho');
   }
});

