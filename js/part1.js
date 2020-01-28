function binary_search(list, item) {
  let low = 0,
    cnt = 0,  
    high = list.length;

  while (low <= high) {
    let mid = Math.floor(((low + high) / 2)),
      guess = list[mid];
    console.log(cnt++, mid, low, high);

    if (guess == item) return mid + 1;

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return "none";
}

function bs(list, item) {
  let low = 0,
    high = list.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2),
      guess = list[mid];

    if (guess == item) return mid + 1;

    guess > item ? high = mid - 1 : low = mid + 1;
  }
  return "none";
}

let arr =[];// [1, 3, 5, 7, 9, 11, 13];
for (let i = 0; i < 4000000; i++) arr.push(i);
  

//console.log(bs(arr, 2));
console.log(binary_search(arr, 11000));
console.log(bs(arr, 11000));
