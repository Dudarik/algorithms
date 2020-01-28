function findSmallest(arr) {
  let small_index = 0,
    smallest = arr[0];
    
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < smallest) {
      smallest = arr[i];
      small_index = i;
      //console.log(smallest);      
    }
  }
  return small_index;
}

function selectionSort(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++){
    console.log(arr);
    let smallest = findSmallest(arr);
    newArr.push(Number(arr.slice(smallest, smallest + 1)));
    arr.splice(smallest);
    //console.log(arr);
    
  }

  return newArr;
}

console.log(selectionSort([5, 3, 2, 2, 10, 12, 1]));