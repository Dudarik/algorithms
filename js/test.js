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
for (let i = 0; i < 100000; i++) arr.push(Math.floor(Math.random() * 100))

console.log(arr);

let start = new Date()
console.log(arr.sort((a, b) => a - b));
console.log(Date.now() - start + ' ms', );
console.log(sSort(arr));
console.log(Date.now() - start + ' ms', );