/** @type {HTMLCanvasElement} */
var canvas = document.querySelector("#canvas");

var ctx = canvas.getContext("2d");

// ctx.fillRect(25,25,100,100);
// ctx.clearRect(45,45,60,60);
// ctx.strokeRect(50,50,50,50);

// ctx.beginPath();
// ctx.moveTo(75,50);
// ctx.lineTo(100,75);
// ctx.lineTo(75,100);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50,50);
// // ctx.quadraticCurveTo(150,50,100,100)
// ctx.bezierCurveTo(150,10,150,150,100,100);
// ctx.stroke();

// ctx.strokeRect(150,10,1,1);
// ctx.strokeRect(150,150,1,1);

// var shape1 = new Path2D();
// shape1.rect(10,10,100,100);
// ctx.stroke(shape1);

var shape2 = new Path2D();
shape2.arc(180,60,50,0,Math.PI*2);
ctx.stroke(shape2)

var shape3 = new Path2D("M10 10 h 110 v 100 h -100 z");
ctx.stroke(shape3)
