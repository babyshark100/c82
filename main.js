var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
widthoftheline = 1
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
  color = document.getElementById("color").value;
  widthoftheline = document.getElementById("widthoftheline").value;
  mouseEvent = "mousedown";  
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave"
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthoftheline;

        console.log("last position of X and Y = ");
        console.log("X = " + lastPositionOfX + "Y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);
        console.log("current position of x and y = ")
        console.log("X = " + currentPositionOfMouseX + "Y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
        
    }
    lastPositionOfX = currentPositionOfMouseX;
    lastPositionOfY = currentPositionOfMouseY;

}
function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
}
