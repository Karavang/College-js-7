function findLargestNumbers(arr) {
  return arr.map(function (subArr) {
    return Math.max(...subArr);
  });
}

console.log(
  findLargestNumbers([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);
console.log(
  findLargestNumbers([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);

function removeFalsyValues(arr) {
  return arr.filter(function (value) {
    return Boolean(value);
  });
}

console.log(removeFalsyValues([7, "ate", "", false, 9]));
console.log(removeFalsyValues(["a", "b", "c"]));
console.log(removeFalsyValues([false, null, 0, NaN, undefined, ""]));
console.log(removeFalsyValues([null, NaN, 1, 2, undefined]));

function insertElements(arr1, arr2, index) {
  let mergedArray = arr2.slice();
  arr1.forEach(function (element) {
    mergedArray.splice(index++, 0, element);
  });
  return mergedArray;
}

console.log(insertElements([1, 2, 3], [4, 5], 1));
console.log(insertElements([1, 2], ["a", "b"], 1));
console.log(insertElements([1, 2, 3, 4], [], 0));

function findIndexToInsert(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }

  return arr.length;
}

console.log(findIndexToInsert([10, 20, 30, 40, 50], 35));
console.log(findIndexToInsert([10, 20, 30, 40, 50], 30));
console.log(findIndexToInsert([3, 10, 5], 3));
console.log(findIndexToInsert([5, 3, 20, 3], 5));
