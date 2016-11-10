// first exercise
// Your code here.
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(v2) {
  return new Vector(this.x + v2.x, this.y + v2.y);
}
Vector.prototype.minus = function(v2) {
  return new Vector(this.x - v2.x, this.y - v2.y);
}
Vector.prototype.__defineGetter__("length", function() {
  return Math.sqrt((this.x)**2 + (this.y)**2);
})

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

// second exercise
// Your code here.
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}
StretchCell.prototype.minWidth = function() {
  if (this.width > this.inner.minWidth()) {
    return this.width;
  } else {
    return this.inner.minWidth();
  }
}
StretchCell.prototype.minHeight = function() {
  if (this.height > this.inner.minHeight()) {
    return this.height;
  } else {
    return this.inner.minHeight();
  }
}
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

// third exercise
// Your code here.
function Sequence(seq) {
  this.seq = seq;
}
Sequence.prototype.iterate = function(f, num) {
  this.seq.forEach(function(item, i) {
    if (i >= num) {
      return
    } else {
      f(item);
    }
  });
}

function ArraySeq(seq) {
  this.inner = new Sequence(seq);
}
ArraySeq.prototype.iterate = function(f, num) {
  return this.inner.iterate(f, num);
}

// alternatively you can set up the sequence value
// and then just reuse the prototype's iterate method
function ArraySeq2(seq) {
  this.seq = seq;
}
ArraySeq2.prototype.iterate = Sequence.prototype.iterate;

function logFive(seqObj) {
  seqObj.iterate(function(item) {console.log(item)}, 5)
}

function RangeSeq(from, to) {
  var arr = [];
  for (var i = from; i <= to; i++) {
    arr.push(i);
  }
  this.inner = new Sequence(arr);
}
RangeSeq.prototype.iterate = function(f, num) {
  return this.inner.iterate(f, num);
}

// alternatively you can set up the sequence value
// and then just reuse the prototype's iterate method
function RangeSeq2(from, to) {
  var arr = [];
  for (var i = from; i <= to; i++) {
    arr.push(i);
  }
  this.seq = arr;
}
RangeSeq2.prototype.iterate = Sequence.prototype.iterate;

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new ArraySeq2([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
logFive(new RangeSeq2(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
