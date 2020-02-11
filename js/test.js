function findSm(arr) {
  let sm = arr[0],
    sm_id = 0

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i]
    if (elem < sm) {
      sm = elem
      sm_id = i
    }
  }
  return sm_id
}

function sSort(arr) {
  let nArr = [],
    l = arr.length

  for (let i = 0; i < l; i++) {
    let sm = findSm(arr)
    nArr.push(arr[sm])
    arr.splice(sm, 1)
  }
  return nArr
}



let arr = []
for (let i = 0; i < 100; i++) arr.push(Math.floor(Math.random() * 100))

/*console.log(arr);

let start = new Date()
console.log(arr.sort((a, b) => a - b));
console.log(Date.now() - start + ' ms', );
console.log(sSort(arr));
console.log(Date.now() - start + ' ms', );*/

function minArea2(x, y) {
  //Не понимаю почему так не работает...   
  if (x%y == 0) {
    console.log(y)
    return y
  } else {
    minArea2(x%y, y - (x%y))
  }
  //console.log(xa);
  return false
}

minArea = (x, y) => {
  return (x % y == 0) ? y : minArea(x % y, y - (x % y))
}
sum = (arr) => {
  let summ = arr.pop()    
  return (arr.length == 0) ? summ : summ + sum(arr)
}

maxEl = (arr) => {
 
  return (arr.length == 1) ? arr[0] : Math.max(arr.shift(), maxEl(arr))
}

function bs_rec(list, item) {
  let low = 0,
  high = list.length

  if (low + 1 <= high) {
    let mid = Math.floor((low + high)/2),
    guess = list[mid]

    if (guess == item) return mid + 1
    //console.log(list.splice(mid, list.length - mid))
    //console.log(list.splice(0, mid + 1));
    //console.log(list);
    
    
    guess > item ? bs_rec(list.splice(mid, list.length - mid)) : bs_rec(list.splice(0, mid + 1))    
  }
  return false
}
//console.log(sum([2,2,3,5]));
//console.log(maxEl([1,2,3,7,9,1,5]));

console.log(bs_rec([1,2,3,4,5,6,7], 5));


//console.log(minArea(1680, 640));