import {test,test1} from '../modules/lib1.js';

test();

const balls = [
    new Ball(100,100,"black"),
    new Ball(200,100,"blue")
];

balls[2] = new Ball(200,200);

/** @type {CanvasRenderingContext2D} */
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

balls[0].draw(ctx);

