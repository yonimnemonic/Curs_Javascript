//primero selecccionamos canvas

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

ctx.lineWidth = "6";
ctx.strokeStyle = "#23a";
ctx.fillStyle = "#66a";

ctx.strokeRect(50,50,400,200);
ctx.fillRect(10,20, 400, 200);
ctx.lineTo(100,300);
ctx.lineTo(120,350);
ctx.lineTo(12,400);
ctx.lineTo(100,950);
ctx.stroke();
ctx.closePath();