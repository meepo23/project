// 4. Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

function min(a, b) {
  if (a < b) {
    return a;
  } else if ((a = b)) {
    return 0;
  } else {
    return b;
  }
}
let a = prompt("Введите число a:  ");
let b = prompt("Введите число b:  ");
console.log(min(a, b));
