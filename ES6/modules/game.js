import * as lib1 from '../modules/lib1.js'; // lib1.js에 있는 export를 모두 lib1이라는 별칭으로 묶는다.
// import {test as libTest, test1 as lib1Test} from '../modules/lib1.js'; // 개별별칭 설정
import aa,{test1, test2} from '../modules/lib2.js'; //기본사용
// import {test,test1} from '../modules/lib2.js';
import Ball from '../modules/ball.js';
import '../modules/config.js'; // 전역변수 import

// lib1Test();
lib1.test();
aa();
test1();
test2();
console.log(count); // 전역변수 count

const balls = [
    new Ball(100,100,"black"),
    new Ball(200,100,"blue")
];

balls[2] = new Ball(200,200);

/** @type {CanvasRenderingContext2D} */
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

balls[0].draw(ctx);

