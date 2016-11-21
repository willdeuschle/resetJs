// first exercise
<input type="text">
<script>
  var field = document.querySelector("input");
  // Your code here.
  field.addEventListener("keypress", function(e) {
    if ("qwx".indexOf(String.fromCharCode(e.charCode)) != -1)
      e.preventDefault();
  });
</script>

// second exercise
<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  // Your code here.
  var num_dots = 15;
  var dotArr = [];
  for (var i = 0; i < num_dots; i++) {
    var dot = document.createElement("div");
    dot.className = "trail";
    dotArr.push(dot);
    document.body.appendChild(dot);
  }
  var currentDot = 0;
  addEventListener("mousemove", function(e) {
    dotArr[currentDot].style.left = (e.pageX - 3) + "px";
    dotArr[currentDot].style.top = (e.pageY - 3) + "px";
    currentDot = (currentDot + 1) % num_dots
  });
</script>

// third exercise
<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    // Your code here.
    // grab all the tab divs of interest
    var tabDivs = node.querySelectorAll("div");

    // create tab button array, one for each tab div
    // use text from each tab div's data-tabname attribute
    // add each one to our tab button div
    // add this div before the node's first child
    tabButtonArr = [];
    var tabButtonDiv = document.createElement("div");
    for (var i = 0; i < tabDivs.length; i++) {
      var tabButton = document.createElement("button");
      var currentTab = tabDivs[i];
      tabButton.textContent = currentTab.getAttribute("data-tabname");
      currentTab.style.display = "none";
      tabButtonArr.push(tabButton);
      tabButtonDiv.appendChild(tabButton);
    }
    node.insertBefore(tabButtonDiv, node.firstChild);

    // add event listeners for each tab and update
    // displays and colors on each event
    tabButtonArr.forEach(function(tabButton, idx) {
      tabButton.addEventListener("click", function() {
        updateDisplayAndColor();
        tabDivs[idx].style.display = "";
        tabButton.style.backgroundColor = "red";
      });
    });

    // reset the tabs displays and colors
    function updateDisplayAndColor() {
      tabDivs.forEach(function(tabDiv) {
          tabDiv.style.display = "none";
        });
      tabButtonArr.forEach(function(tabButton) {
        tabButton.style.backgroundColor = "";
      });
    }

    // select the first one
    tabButtonArr[0].click();
  }
  asTabs(document.querySelector("#wrapper"));
</script>
