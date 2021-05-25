window.addEventListener('DOMContentLoaded', () => {

   //TABS

   const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

   function HideTabContent() {
      tabsContent.forEach(item => {
         item.style.display = 'none';
      });

      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      });
   }

   function showTabContent(i = 0) {
      tabsContent[i].style.display = 'block';
      tabs[i].classList.add('tabheader__item_active');
   }

   HideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      console.log(event.target);
      const target = event.target;

      if (target && target.classList.contains('tabheader__item')) {
         tabs.forEach((item, i) => {
            if (target == item) {
               HideTabContent();
               showTabContent(i);
            }
         });
      }
   });

   //TIMER

   const deadline = '2021-05-29';

   function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date()),
         days = Math.floor(t / (24 * 3600 * 1000)),
         hours = Math.floor((t / (3600 * 1000)) % 24),
         minutes = Math.floor((t / (60 * 1000)) % 60),
         seconds = Math.floor((t / 1000) % 60);

      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };
   }

   function getZero(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }

   function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
         const t = getTimeRemaining(endtime);

         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);

         if (t.total <= 0) {
            clearInterval(timeInterval);
         }
      }
   }

   setClock('.timer', deadline);

   //MODAL

   const modalTrigger = document.querySelectorAll('[data-modal]'),
      modalCloseBtn = document.querySelector('[data-close]'),
      modalWin = document.querySelector('.modal');


   function modalOpen(modal) {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
      clearInterval(modalTimerId);
   }

   function modalClose(modal) {
      // if (modalShow.display == 'block') {
      //    modalWin.style.display = 'none';
      //    document.body.style.overflow = '';
      // }
      modal.classList.add('hide');
      modal.classList.remove('show');
      document.body.style.overflow = '';
   }

   // const modalShow = window.getComputedStyle(modal);
   modalTrigger.forEach((item) => {
      item.addEventListener('click', () => {
         // if (modalShow.display == 'none') {
         //    modalWin.style.display = 'block';
         //    document.body.style.overflow = 'hidden';
         // }
         modalOpen(modalWin);
      });
   });

   modalCloseBtn.addEventListener('click', () => {
      modalClose(modalWin);
   });

   modalWin.addEventListener('click', e => {
      if (e.target === modalWin) {
         modalClose(modalWin);
      }
   });

   document.addEventListener('keydown', e => {
      if (e.code === 'Escape' && modalWin.classList.contains('show')) {
         modalClose(modalWin);
      }
   });

   const modalTimerId = setTimeout(() => {
      modalOpen(modalWin);
   }, 10000);

   function openModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         modalOpen(modalWin);
         window.removeEventListener('scroll', openModalByScroll);
      }
   }

   window.addEventListener('scroll', openModalByScroll);
});