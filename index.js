// 1) Напишите функцию getDays, которая принимает год и месяц, а возвращает количество дней в месяце
// getDays( 2021 , 4)  //30
// getDays( 2021 , ‘April’)  //30

// 2) Через прототип расширьте встроенный объект Number методом isOdd(),
// который возвращает true, если число нечетное.

// 3) Написать функцию every, которая будет принимать первым аргументом массив,
// а вторым функцию колбэк(которая будет принимать каждый элемент массива и возвращать true либо false).
// Результатом функции должно быть логическое выражение true / false  в зависимости от того, выполняется ли
// условие для каждого из элементов.

// Example:
// every([8, 2, 4], function (num){
// 	return  num%2===0
// })  // true

// Все созданные функции должны быть покрыты тестами!

// function getDaysStr(month, year) {
//   if (typeof month === "string")
//     for (var i = 0; i < monthStr.length; i++) {
//       monthStr[i] = monthOdd;
//       console.log((monthStr[i] = monthOdd));
//       return element;
//     }
//   return;
// }

function getDays(year, month) {
  var monthOdd = 31;
  var monthEven = 30;
  var february = 28;
  var result = "";

  if (typeof (year, month) !== "number") {
    return "Not a number";
  }
  switch (true) {
    case month % 2 === 0 && month !== 2:
      result += monthEven;
      break;
    case month % 2 !== 0:
      result += monthOdd;
      break;
    case month === 2:
      result += february;
      break;
    default:
      result += "error";
      break;
  }
  return +result;
}

console.log(getDays(2021, 3));

module.exports = { getDays };
