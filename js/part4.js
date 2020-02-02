function summ(arr, sum) {
  sum = sum || 0;

  return arr.length ? summ(arr, sum + arr.pop()) : sum;
}

let test = [1, 2, 3, 4, 5];
//console.log(test.splice(test.length-1, 1));
//console.log(summ(test));

function qsort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let pivot = arr[0],
    less = arr.slice(1).filter((el) => {
      console.log('Меньше ', pivot, el);

      return el <= pivot
    }),
    greater = arr.slice(1).filter((el) => {
      console.log('Больше', pivot, el);
      return el > pivot
    })

  return qsort(less).concat([pivot], qsort(greater))
}

let testqsort = [6, 4, 89, 3, 4, 6, 8, 1, 2];

//console.log(qsort(testqsort));

//ёмае этоже стек :)
function printX(x) {
  console.log(x)
  if (x > 0) printX(x - 1)
  console.log(x)
}
//printX(5);

function fA(x) {
  console.log('до fB', x);
  fB(x - 1)
  console.log('после fB', x);
}

function fB(x) {
  console.log('до fA', x);
  if (x < 10) fA(x + 2)
  console.log('после fA', x);
}

//fB(5)

function toBin(x, arr) {
  let y = x % 2


  x = Math.floor(x / 2)

  if (x > 0) toBin(x, arr)
  arr.push(y)

  return Number(arr.join(''))

}
console.log(toBin(5, []))
