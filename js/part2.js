function findSmallest(arr) {
  let small_index = 0,
    smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < smallest) {
      smallest = arr[i];
      small_index = i;
    }
  }
  return small_index;
}

function selectionSort(arr) {

  let newArr = [];
  let len = arr.length;

  for (let i = 0; i < len; i++) {

    let smallest = findSmallest(arr);
    newArr.push(Number(arr.splice(smallest, 1)));
  }

  return newArr;
}

console.log(selectionSort([10, 9, 2, 3, 5, 6, 2, 6, 3, 4]));
//selectionSort([5, 3, 2, 2, 10, 12, 1]);