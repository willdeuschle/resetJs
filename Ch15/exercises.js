// first exercise
<link rel="stylesheet" href="css/game.css">

<body>
<script>
  // The old runGame function. Modify it...
  function runGame(plans, Display) {
    var lives = 3;
    function startLevel(n) {
      runLevel(new Level(plans[n]), Display, function(status) {
        if (status == "lost")
          // account for off by 1
          if (!(lives - 1)) {
            lives = 3;
            startLevel(0);
          } else {
            lives -= 1;
            startLevel(n);
          }
        else if (n < plans.length - 1)
          startLevel(n + 1);
        else
          console.log("You win!");
      });
    }
    startLevel(0);
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>

// second exercise
<link rel="stylesheet" href="css/game.css">

<body>
<script>
  // The old runLevel function. Modify this...
  function runLevel(level, Display, andThen) {
    var display = new Display(document.body, level);
    var shouldPlay = true;
    addEventListener('keydown', function(e) {
      if (e.keyCode == 27)
        shouldPlay = !shouldPlay;
    });
    runAnimation(function(step) {
      if (shouldPlay)
        level.animate(step, arrows);
      display.drawFrame(step);
      if (level.isFinished()) {
        display.clear();
        if (andThen)
          andThen(level.status);
        return false;
      }
    });
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>
