

var canvas = document.getElementById("gamecanvas");
var context = canvas.getContext("2d");

context.fillStyle = "#000000";
context.fillRect(0,0,100,100);

var button = document.createElement("button");
button.innerHTML = "Do Something";

var x = 0
// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("hello wrold");
)};

document.write(x);


