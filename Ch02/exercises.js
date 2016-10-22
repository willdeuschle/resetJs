// first exercise
for (var line = "#"; line.length < 7; line += "#")
  console.log(line);

// second exercise
for (var i = 1; i < 100; i++) {
  var output = "";
  if (i % 3 == 0)
    output += "Fizz";
  if (i % 5 == 0)
    output += "Buzz";
  console.log(output || i);
}

// third exercise
function chessBoard(size) {
  for (var i = 0; i < size; i++) {
    var output = "";
    for (var j = 0; j < size; j++) {
      if ((i + j) % 2 == 0)
        output += " "
      else
        output += "#"
    }
    console.log(output);
  }
}
chessBoard(8);
