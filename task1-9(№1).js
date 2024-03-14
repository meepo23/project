// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
let arr = ["http://Яблоко", "ht://Ананас", "http://Груша", "ftp://Банан"];

let Strings = arr.filter((str) => str.startsWith("http://"));

console.log(Strings);
