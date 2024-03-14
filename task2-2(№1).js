// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
let arr = [-5, 8, -3, -1, 4, 25, 100];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    count++;
  }
}
console.log(count);
