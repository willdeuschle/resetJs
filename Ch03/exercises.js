// first exercise
function min(x, y) {
  return (x < y) ? x : y;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// second exercise
function isEven(num) {
  if (num < 0)
    num = num * -1
  if (num == 0)
    return true
  else if (num == 1)
    return false
  else
    return isEven(num - 2)
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// third exercise
function countBs(str) {
  return countChar(str, "B");
}
function countChar(str, char) {
  count = 0;
  for (i = 0; i < str.length; i++)
    if (str.charAt(i) == char)
      count += 1;
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
