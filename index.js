// 1) Напишите функцию getDays, которая принимает год и месяц, а возвращает количество дней в месяце
// getDays( 2021 , 4)  //30
// getDays( 2021 , ‘April’)  //30

function getDays(year, month) {
  if (typeof year !== "number") {
    return "Not a number";
  }
  var getMonthStr = new Date(Date.parse(month + " 1," + year)).getMonth() + 1;
  return new Date(year, getMonthStr, 0).getDate();
}

// 2) Через прототип расширьте встроенный объект Number методом isOdd(),
// который возвращает true, если число нечетное.

Number.prototype.isOdd = function (number) {
  if (this % 2 === 0) {
    return false;
  }
  return true;
};
var number = 15;

// 3) Написать функцию every, которая будет принимать первым аргументом массив,
// а вторым функцию колбэк(которая будет принимать каждый элемент массива и
// возвращать true либо false).
// Результатом функции должно быть логическое выражение true / false  в
// зависимости от того, выполняется ли
// условие для каждого из элементов.
// Example:
// every([8, 2, 4], function (num){
// 	return  num%2===0
// })  // true

var every = function (arr, call) {
  for (var i = 0; i < arr.length; i++) {
    if (!call(arr[i])) {
      return false;
    }
  }
  return true;
};

every([8, 2, 4], function (number) {
  return number % 2 === 0;
});

module.exports = { getDays, every };
