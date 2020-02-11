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
      //console.log('Меньше ', pivot, el);

      return el <= pivot
    }),
    greater = arr.slice(1).filter((el) => {
      //console.log('Больше', pivot, el);
      return el > pivot
    })
  console.log(pivot, less, greater);


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
//console.log(toBin(5, []))

function qs(arr) {

  if (arr.length < 2) return arr

  let pivot = arr[Math.round(arr.length / 2)]

  let less = arr.filter(el => el < pivot)

  let greater = arr.filter(el => el > pivot)

  let equal = arr.filter(el => el == pivot)

  console.log(pivot, less, greater);

  //return [...qs(less), ...equal, ...qs(greater)]
  return qs(less).concat(equal, qs(greater))
}

function bubbleSort(arr) {
  let len = arr.length

  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        /*let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp*/
      }
    }
  }
  return arr
}

function partition(arr, low, hi){
  
  let pivotPosition = Math.floor(Math.random() * arr.length)
  let pivot = arr[pivotPosition]

  while (hi >= low) {

    while (arr[hi] > pivot) 
      hi--
    
    while (arr[low] < pivot) 
      low++
    
    if (hi >= low)  {
      [arr[low], arr[hi]] = [arr[hi], arr[low]]
      hi--
      low++
    }
  }
  return low
}

function qs2(arr, low = 0, hi = arr.length - 1){
  if (low < hi) {
    let id = partition(arr, low, hi)
    qs2(arr, low, id - 1)
    qs2(arr, id, hi)
  }
  return arr
}

let testQs = [6, 8, 9, 23, 3, 4, 23, 7, 5, 3, 1, 45, 64, 25, 3]

console.log(qs2(testQs));

//console.log(qs(testQs), 'test qs');