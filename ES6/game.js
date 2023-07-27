const ballls = [
    new Ball(100,100,"black"),
    new Ball(200,100,"blue")
];

balls[2] = new Ball(200,200);

/** @type {CanvasRenderingContext2D} */
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

