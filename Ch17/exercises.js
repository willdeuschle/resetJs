// first exercise
// Your code here.
function setHeader(type) {
  var req = new XMLHttpRequest();
  req.open('GET', 'http://eloquentjavascript.net/author', false);
  req.setRequestHeader('Accept', type);
  req.send(null);
  return req.responseText
}

var headerTypes = [
  'text/plain',
  'text/html',
  'application/json',
  'application/rainbows+unicorns'
  ]

headerTypes.forEach(function(type) {
  console.log(setHeader(type));
});

// second exercise
function all(promises) {
  return new Promise(function(success, fail) {
    // Your code here.
    var prom_length = promises.length;
    var prom_return = [];
    promises.forEach(function(p, i) {
      p.then(function(result) {
        prom_return[i] = result;
        prom_length -= 1;
        if (prom_length == 0)
          return success(prom_return);
      }, function(error) {
        return fail(error);
      });
    });
    if (prom_length == 0)
      return success(prom_return);
  });
}

// Test code.
all([]).then(function(array) {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(function(success) {
    setTimeout(function() { success(val); },
               Math.random() * 500);
  });
}
all([soon(1), soon(2), soon(3)]).then(function(array) {
  console.log("This should be [1, 2, 3]:", array);
});
function fail() {
  return new Promise(function(success, fail) {
    fail(new Error("boom"));
  });
}
all([soon(1), fail(), soon(3)]).then(function(array) {
  console.log("We should not get here");
}, function(error) {
  if (error.message != "boom")
    console.log("Unexpected failure:", error);
});
