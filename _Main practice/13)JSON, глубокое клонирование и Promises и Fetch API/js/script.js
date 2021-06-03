//JSON
//////////////////////////////////////////////
'use strict';

const persone = {
   name: 'alex',
   tel: '+734234234',
   parents: {
      mom: 'Olga',
      dad: 'Mike'
   }
};

// console.log(JSON.parse(JSON.stringify(persone)));// stringify из объекта в JSON,parse наоборот

const clone = JSON.parse(JSON.stringify(persone)); // глубокая копия объекта
clone.parents.mom = 'Kate';
clone.name = 'Jenya';

// console.log(persone);
// console.log(clone);

//AJAX и ОБЩЕНИЕ С СЕРВЕРОМ
/////////////////////////////////////////////

const inputRub = document.querySelector('#rub'),
   inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
   const request = new XMLHttpRequest();

   //methods
   request.open('GET', 'js/current.json');//настройки для запроса
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');//что именно передаём
   request.send();

   request.addEventListener('load'/*or readystatechange*/, () => {
      if (/*request.readyState === 4 && */request.status === 200) {
         console.log(request.response);
         const data = JSON.parse(request.response);
         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
      } else {
         inputUsd.value = 'Something went wrong';
      }
   });

   //props:///////////
   // status
   // statusText  // текст без номера ошибки
   // response    // ответ от сервера
   // readyState  // текущее состояние запроса

   //События XMLHttpRequest() объекта /////////////
   // readystatechange // готовность нашего запроса на текущий момент
   // load             // запрос полностью загрузился и мы получили какой-то результат



   //Promises///////////////////////////////////////////////

   console.log('Getting data...');

   const req = new Promise(function (resolve, reject) {
      setTimeout(() => {
         console.log('Preparing...');

         const product = {
            name: 'TV',
            price: 2000
         };

         resolve(product);
      }, 2000);
   });

   req.then((product) => { // короче вместо постоянных коллбеков(callback hell) делаем цепочку промисов
      return new Promise((resolve, reject) => { //возвращаем промис
         setTimeout(() => {
            product.status = 'ordered';
            resolve(product);
            reject();
         }, 2000);
      });
   }).then(data => {
      data.modify = true;
      return data; // но можно возвращать не только промисы

   }).then(data => { // выполняет действие, если сработал resolve
      console.log(data);
   }).catch(() => { // выполняет действие, если сработал reject
      console.log('sus');
   }).finally(() => { // выполняет действие в любом случае
      console.log('finally');
   });

   //all and race

   const test = time => {
      return new Promise(resolve => {
         setTimeout(() => resolve(), time)
      });
   };

   test(1000).then(() => console.log('1000 ms'));
   test(2000).then(() => console.log('2000 ms'));

   Promise.all([test(1000), test(2000)]).then(() => console.log('all'));// этот метод срабатывает, когда все промисы,
   //                                                                   // помещённые массив, сработали.(ждёт всех)
   Promise.race([test(1000), test(2000)]).then(() => console.log('first')); // срабатывает после первого промиса в массиве

   fetch()

});
