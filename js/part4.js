function summ(arr, sum) {
  sum = sum || 0;

  return arr.length ? summ(arr, sum + arr.pop()) : sum;
}

let test = [1, 2, 3, 4, 5];
//console.log(test.splice(test.length-1, 1));
console.log(summ(test));