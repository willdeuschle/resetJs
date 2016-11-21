// first exercise
<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>
<script>
  function buildTable(data) {
    // Your code here.
    // create table
    var table = document.createElement('table');

    // make the header row
    var header_tr = document.createElement('tr');

    // grab the header elements
    var headers = Object.keys(data[0]);

    // construct the header elements
    headers.forEach(function(name) {
      var content = document.createTextNode(name)
      var headerBox = document.createElement('th');
      headerBox.appendChild(content);
      header_tr.append(headerBox);
    });
    table.appendChild(header_tr);

    // create a new table row for each data object, add it to the table
    data.forEach(function(row_data) {
      // create new table row
      var data_tr = document.createElement('tr');

      // use the header names to access the data,
      // assign it to a new data box, append it to the table row
      headers.forEach(function(name) {
        var dataBox = document.createElement('td');
        var content = row_data[name];
        var textContent = document.createTextNode(content);

        // align right if the content is a number
        if (typeof content == "number") {
          dataBox.style.textAlign = "right";
        }

        dataBox.appendChild(textContent);
        data_tr.appendChild(dataBox);
      });

      table.appendChild(data_tr)
    });

    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>

// second exercise
<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    var results = [];
    function find(node) {
      node.childNodes.forEach(function(child) {
        if (child.nodeType === document.ELEMENT_NODE) {
          if (child.nodeName.toLowerCase() === tagName)
            results.push(child);
          find(child);
        }
      });
    }
    find(node);
    return results;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>

// third exercise
<p style="text-align: center">
  <img src="img/cat.png" id="cat" style="position: relative">
  <img src="img/hat.png" id="hat" style="position: relative">
</p>

<script>
  var cat = document.querySelector("#cat");
  var hat = document.querySelector("#hat");
  // Your code here.
  var angle = 0, lastTime = null;
  function animate(time) {
    if (lastTime != null)
      angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    hat.style.top = (Math.sin(angle + 3.14) * 20) + "px";
    hat.style.left = (Math.cos(angle + 3.14) * 200) + "px";
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
</script>
