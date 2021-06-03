////////////////////////////////////////////////////////////
//REST

const log = function (a, b, ...rest) {
   console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage'); //basic rest [ 'operator', 'usage' ]

function caclcOrDouble(number, basis = 2) {// basis по умолчанию теперь 2
   console.log(number * basis);
}

caclcOrDouble(3);//6