// first exercise
// Modify these definitions...

topEnv["array"] = function() {
  arr = [];
  Array.prototype.slice.call(arguments, 0).forEach(function(elem) {
    arr.push(elem);
  });
  return arr;
};

topEnv["length"] = function(arr) {
  return arr.length;
};

topEnv["element"] = function(arr, n) {
  return arr[n];
};

run("do(define(sum, fun(array,",
    "     do(define(i, 0),",
    "        define(sum, 0),",
    "        while(<(i, length(array)),",
    "          do(define(sum, +(sum, element(array, i))),",
    "             define(i, +(i, 1)))),",
    "        sum))),",
    "   print(sum(array(1, 2, 3))))");
// → 6

// second exercise
// This is the old skipSpace. Modify it...
function skipSpace(string) {
  var skip = string.match(/^(\s|#.*)*/)
  return string.slice(skip[0].length);
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}

// third exercise
specialForms["set"] = function(args, env) {
  if (Object.prototype.hasOwnProperty.call(env, args[0])) {
    env[args[0]] = args[1];
  } else if (env[args[0]]) {
    env[args[0]] = args[1];
  } else {
    throw new ReferenceError("no variable defined for " + args[0]);
  }
};

run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError
