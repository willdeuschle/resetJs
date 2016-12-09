// first exercise
<textarea id="code">return "hi";</textarea>
<button id="button">Run</button>
<pre id="output"></pre>

<script>
  // Your code here.
  var input = document.querySelector("#code");
  var btn = document.querySelector("#button");
  var output = document.querySelector("#output");
  btn.addEventListener('click', function() {
    var fn = new Function(input.value)
    var result = fn();
    output.textContent = result;
  });
</script>

// second exercise
// <input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>

<script>
  // Builds up an array with global variable names, like
  // 'alert', 'document', and 'scrollTo'
  var terms = [];
  for (var name in window)
    terms.push(name);

  // Your code here.
  var input = document.querySelector("#field");
  var suggs = document.querySelector("#suggestions");
  input.addEventListener("input", function(e) {
    while (suggs.firstChild)
      suggs.removeChild(suggs.firstChild);
    var input_value = e.target.value
    var filtered_terms = terms.filter(function(item) {return item.startsWith(input_value)});
    var sugg_list = document.createElement("div");
    filtered_terms.forEach(function(term) {
      var term_elem = document.createElement("div");
      term_elem.textContent = term;
      term_elem.addEventListener("click", function() {
        input.value = term;
      });
      sugg_list.appendChild(term_elem);
    });
    suggs.appendChild(sugg_list);
  });
</script>

// third exercise (not finished)
<div id="grid"></div>
<button id="next">Next generation</button>

<script>
  // Your code here.
  // grab the grid, this is what we'll be manipulating
  var grid = document.querySelector("#grid");
  // this is the global stateGrid, I'm storing the values as an array of arrays
  var stateGrid = [];
  // choose global grid size
  var grid_size = 3;

  // initialize grid randomly
  for (var i = 0; i < grid_size; i++) {
    stateGrid[i] = [];
    for (var j = 0; j < grid_size; j++) {
      stateGrid[i][j] = Math.random() < 0.50;
    }
  }

  // this function generates a new grid of buttons wrapped in a div
  // and returns that div
  function genGrid() {
    var gridDiv = document.createElement("div");
    stateGrid.forEach(function(subArr) {
      var row = document.createElement("div");
      subArr.forEach(function(val) {
        var temp_box = document.createElement("input");
        temp_box.type = "checkbox";
        if (val)
          temp_box.checked = true;
        row.appendChild(temp_box);
      });
      gridDiv.appendChild(row);
    });
    return gridDiv;
  }

  // generates the score for a given square given the current state of the grid
  function genScore(i, j, currentState) {
    score = 0;
    // need to calc +- 1 up and down
    // need to avoid the current square
    // every combo of these
    for (var k = Math.min(i + 1, grid_size - 1); k >= Math.max(i - 1, 0); k--) {
      for (var l = Math.min(j + 1, grid_size - 1); l >= Math.max(j - 1, 0); l--) {
        if (k != i || j != l) {
          if (currentState[k][l])
            score +=1
        }
      }
    }
    return score;
  }

  // generates the current state so that the user can manipulate it and our
  // calculations will still be correct
  function calcCurrentState() {
    var holdingDiv = grid.firstChild;
    var currentState = [];
    holdingDiv.childNodes.forEach(function(row, i) {
      currentState[i] = []
      row.childNodes.forEach(function(btn, j) {
        currentState[i][j] = btn.checked;
      });
    });
    return currentState;
  }

  // this creates the next stateGrid based on the current one
  function genNextState() {
    var currentState = calcCurrentState();
    var newGrid = [];
    for (var i = 0; i < grid_size; i++) {
      newGrid[i] = [];
      for (var j = 0; j < grid_size; j++) {
        var gridScore = genScore(i, j, currentState);

        // then just need to generate the
        // new value based on the score
        if (!currentState[i][j] && gridScore === 3) {
          newGrid[i][j] = true;
        } else if (gridScore == 2 || gridScore == 3) {
          newGrid[i][j] = true;
        } else {
          newGrid[i][j] = false;
        }
      }
    }
    stateGrid = newGrid;
  }

  // this function gets attached to the next generation button and creates
  // the next grid. if this is the initialization, we simply add the first grid
  function nextGeneration() {
    if (grid.firstChild) {
      genNextState();
      grid.removeChild(grid.firstChild);
    }
    grid.appendChild(genGrid());
  }

  // add the first grid
  nextGeneration();

  // add the event listener to the button to generate the next generation
  button = document.querySelector('#next');
  button.addEventListener('click', function() {
    nextGeneration();
  });

</script>
