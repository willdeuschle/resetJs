// first exercise
var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
var flattened = arrays.reduce(function(arr, elem) {
  return arr.concat(elem)
}, []);
console.log(flattened)
// → [1, 2, 3, 4, 5, 6]

// second exercise
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
console.log(average(ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
})));

// → 31.2

// third exercise
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.
function groupBy(arr, f) {
  var obj = {};
  arr.forEach(function(item) {
    var grouping = f(item);
    if (obj[grouping] != null) {
      obj[grouping].push(item);
    } else {
      obj[grouping] = [item];
    }
  });
  return obj;
}

function groupByCentury(arr) {
  var finalObj = groupBy(arr, function(person) {
    return Math.ceil(person.died / 100);
  });
  for (cent in finalObj) {
    console.log(cent + ": " + average(finalObj[cent].map(function(person) {
      return (person.died - person.born);
    })));
  }
}
groupByCentury(ancestry);

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

// fourth exercise
// Your code here.
function every(arr, pred) {
  arr.forEach(function(item) {
    if (!pred(item)){
      return false;
    }
  });
  return true;
}

function some(arr, pred) {
  arr.forEach(function(item) {
    if (pred(item)) {
      return true;
    }
  });
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
