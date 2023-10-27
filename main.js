// Создайте две функции, add и multiply; пусть каждая принимает
// по два аргумента. Функция add должна складывать аргументы
// и возвращать результат, а функция multiply — перемножать
// аргументы.
// С помощью только этих двух функций вычислите следующее
// несложное выражение: 36325 * 9824 + 777
// function add(a, b) {
//   return a + b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// const res = multiply((a = 36325), (b = 9825));
// console.log(add(res, (b = 777)));
// 2) Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// function multiplication(a) {
//   return a ** 2;
// }
// console.log(multiplication(6));
// 3) Сделайте функцию, которая возвращает сумму двух чисел.
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 5));
// 4) Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function divis(a, b, c) {
//   return a - b / c;
// }
// console.log(divis(2, 5, 9));
// 5) Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function week(day) {
  switch (day) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 7:
      return "Воскресенье";
    default:
      return "В неделю только 7 дней";
  }
}
console.log(week(1));
