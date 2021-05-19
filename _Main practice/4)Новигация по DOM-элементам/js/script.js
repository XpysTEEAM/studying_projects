//console.log(document.body);
//console.log(document.documentElement); //тег html
// console.log(document.body.childNodes); //все дети body
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

//console.log(document.querySelector('#current').parentNode.parentNode);//берём ребёнка и обращаемся к родителю
//console.log(document.querySelector('#current').parentNode.parentElement);

//console.log(document.querySelector('[data-current="3"]').nextSibling);//получаем перенос строки // data-... используется для более удобного ориентирования в скриптах(пишется в вёрстке)
//console.log(document.querySelector('[data-current="3"]').nextElementSibling);//получаем следующий элемент

for (let node of document.body.childNodes) { // выводим все элементы страницы в консоль без переносов строки
   if (node.nodeName == '#text') {
      continue;
   }
   console.log(node);
}
