/** @type {CanvasRenderingContext2D} */
var canvas = document.querySelector("#canvas");


// ================클릭에 따른 변화(흔적이 남음)===================

// canvas.onclick= function(e){ // 클릭이라는 이벤트가 발생한다.
//     {
//     var click = 0;
//     console.log(e.x, e.y); // 좌표를 찍는다.
 
//     var ball2 = new Path2D(); // 찍은 좌표에 따라 원이 그려진다.
//     ball2.arc(e.x,e.y,30,0,Math.PI*2); //원의 모양을 그린다.
//     ctx.fill(ball2); // 원안의 색을 채운다.
//     }
// }

// ===================클릭 리셋===================
// canvas.onclick= function(e){ 
//     var ball = new Path2D();
//     ball.arc(e.x,e.y,30,0,Math.PI*2);

//     ctx.clearRect(0,0,900,700); // 리셋
//     ctx.fill(ball);
// }

// ==================새로고침 후 이전에 찍힌 원의 흔적 남기기(상태값 유지)==============
// 상태를 남기는 3가지 방법 localStorage,server,queryString

// ------------------상태관리--------------------
// var x = localStorage.getItem("x") || 100; // 상태값을 가져온다.
// var y = localStorage.getItem('y') || 100;
// console.log(typeof localStorage.getItem("y")); 

// canvas.onclick = function(e){
//     x = e.x;
//     y = e.y;

//     localStorage.setItem('x', x); // 상태값을 남긴다.
//     localStorage.setItem('y', y);
// };

// // -------------------그림그리기-------------------
// var ball = new Path2D();
// ball.arc(x,y,30,0,Math.PI*2);
// ctx.clearRect(0,0,900,700); // 리셋
// ctx.fill(ball);

// ================ 점진적으로 원 옮기기(setInterver)=========
// /** @type {CanvasRenderingContext2D} */
// var canvas = document.querySelector("#canvas");
// //------------------상태관리--------------------
// var x = localStorage.getItem("x") || 100; // 상태값을 가져온다.
// var y = localStorage.getItem('y') || 100;
// console.log(typeof localStorage.getItem("y")); 

// // ------------------x,y값 설정------------------
// canvas.onclick = function(e){
//     x = e.x;
//     y = e.y;

//     localStorage.setItem('x', x); // 상태값을 남긴다.
//     localStorage.setItem('y', y);
// };

// // -----------------그림그리기----------------------
// window.setInterval(function(){
//     x++;
//     var ctx = canvas.getContext("2d");
//     var ball = new Path2D();
//     ball.arc(x,y,30,0,Math.PI*2);
//     ctx.clearRect(0,0,900,700);
//     ctx.fill(ball);
// }, 50);

// =================== 원하는 곳(찍은곳)으로 원 점진적으로 옮기기(애니메이션)=============
// /** @type {CanvasRenderingContext2D} */
// var canvas = document.querySelector("#canvas");

// var x = 100; // 찍기 전 초기 x,y값
// var y = 100; 
// var vx = 0; //x에서 dx로 이동하기 위한 너비
// var vy = 0;
// var dx = 0; // 찍는 x,y값
// var dy = 0;

// // ------------------x,y값 설정------------------
// canvas.onclick = function(e){
//     dx = e.x; //dx : 이동하기위해 찍은 x값
//     dy = e.y; //dy : 이동하기위해 찍은 y값

//     var w = (dx-x); // 이동하기위한 너비
//     var h = (dy-y); // 이동하기위한 높이
//     var d = Math.sqrt(w*w+h*h); //이동하기위한 빗변
//     vx = w/d; // vx? 1을 가기위한 단위 너비
//     vy = h/d; // vy? 1을 가기위한 단위 높이

// };

// // -----------------그림그리기----------------------
// window.setInterval(function(){
//     if(
//         (x-1<dx&&dx<x+1)&&
//         (y-1<dy&&dy<y+1)
//     ){
//         vx=0;
//         vy=0;
//     } // 멈추기, 자바스크립트 실수에 대한 성격때문에 범위로 멈추는 작업을 해준다

//     x+= vx; //누적해서 x값으로 이동
//     y+= vy; //누적해서 y값으로 이동
//     var ctx = canvas.getContext("2d");
//     ctx.fillStyle = 'blue';
//     ball.arc(x,y,30,0,Math.PI*2);
//     ctx.clearRect(0,0,900,700);
//     ctx.fill(ball);
// }, 50);








