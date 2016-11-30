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
  var arrowCodes = {37: "left", 38: "up", 39: "right"};
  function trackKeys(codes) {
  var pressed = Object.create(null);
  function handler(event) {
    if (codes.hasOwnProperty(event.keyCode)) {
      var down = event.type == "keydown";
      pressed[codes[event.keyCode]] = down;
      event.preventDefault();
    }
  }
  addEventListener("keydown", handler);
  addEventListener("keyup", handler);
  // give the returned object a function to clear the event listeners
  pressed.reset = function() {
    removeEventListener("keydown", handler);
    removeEventListener("keyup", handler);
  }
  return pressed;
}
  // The old runLevel function. Modify this...
  function runLevel(level, Display, andThen) {
    var display = new Display(document.body, level);

    arrows = trackKeys(arrowCodes);

    // determine whether or not to run the animation
    var shouldPlay = true;
    function determinePlay(e) {
      if (e.keyCode == 27)
        shouldPlay = !shouldPlay;
    }
    addEventListener('keydown', determinePlay);

    runAnimation(function(step) {
      // determine whether or not to animate
      if (shouldPlay)
        level.animate(step, arrows);

      display.drawFrame(step);
      if (level.isFinished()) {
        display.clear();
        // remove our event listeners
        removeEventListener('keydown', determinePlay);
        arrows.reset();
        if (andThen)
          andThen(level.status);
        return false;
      }
    });
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>
