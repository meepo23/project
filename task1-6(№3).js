// Дан массив с числами. Найдите сумму положительных элементов этого массива.
let arr = [-5, 8, -3, -1, 4, 25, 100];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    count += arr[i];
  }
}
console.log(count);
