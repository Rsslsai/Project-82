var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var mouse_event = "empty";
var x_position_of_start ;
var y_position_of_start ;
canvas.addEventListener("mouseleave", mouseleave);
function mouseleave(e) {
    mouse_event = "mouseleave";
}
canvas.addEventListener("mouseup", mouseup);
function mouseup(e) {
    mouse_event = "mouseup";
}
canvas.addEventListener("mousedown", mousedown);
function mousedown(e) {
    mouse_event = "mousedown";
}
canvas.addEventListener("mousemove", mousemove);
function mousemove(e) {
var x_position_of_end = e.clientX-canvas.offsetLeft;
var y_position_of_end = e.clientY-canvas.offsetTop;
    if (mouse_event == "mousedown") {
        context.beginPath();
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.moveTo(x_position_of_start, y_position_of_start);
        context.lineTo(x_position_of_end, y_position_of_end);
        context.stroke();
        x_position_of_start = x_position_of_end;
        y_position_of_start = y_position_of_end;
    }
}