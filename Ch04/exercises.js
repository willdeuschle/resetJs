// first exercise
function range(start, end, step) {
  var arr = [];
  step = (step || 1);
  if (step > 0) {
    for (var i = start; i <= end; i += step)
      arr.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      arr.push(i);
  }
  return arr;
}

function sum(arr) {
  var total = 0;
  for (var i of arr)
    total += i;
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


// second exercise
function reverseArray(arr) {
  var newArr = [];
  for (var i of arr) {
    newArr.unshift(i);
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  for (var i = 0; i < (arr.length / 2); i++) {
    var start = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = start;
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// third exercise
function arrayToList(arr) {
  if (arr.length > 0) {
    return {value: arr[0], rest: arrayToList(arr.slice(1))}
  } else {
    return null;
  }
}

function listToArray(lst) {
  if (lst) {
    return [lst.value].concat(listToArray(lst.rest))
  } else {
    return [];
  }
}

function prepend(elem, lst) {
  return {value: elem, rest: lst}
}

function nth(lst, num) {
  if (!lst)
    return undefined;
  else if (num == 0)
    return lst.value
  else
    return nth(lst.rest, num - 1)
}

// fourth exercise
function deepEqual(obj1, obj2) {
  if ((typeof obj1 && typeof obj2 == "object") && (obj1 && obj2)) {
    for (var sub in obj1) {
      if (!deepEqual(obj1[sub], obj2[sub]))
        return false;
    }
  } else {
    if (obj1 !== obj2)
      return false;
  }
  return true;
}
