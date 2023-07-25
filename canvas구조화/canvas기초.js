/** @type {CanvasRenderingContext2D} */
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
// ================클릭에 따른 변화(흔적이 남음)===================

canvas.onclick= function(e){ // 클릭이라는 이벤트가 발생한다.
    {
    var click = 0;
    console.log(e.x, e.y); // 좌표를 찍는다.
 
    var ball2 = new Path2D(); // 찍은 좌표에 따라 원이 그려진다.
    ball2.arc(e.x,e.y,30,0,Math.PI*2); //원의 모양을 그린다.
    ctx.fill(ball2); // 원안의 색을 채운다.
    }
}

// ===================클릭 리셋===================
canvas.onclick= function(e){ 
    var ball = new Path2D();
    ball.arc(e.x,e.y,30,0,Math.PI*2);

    ctx.clearRect(0,0,900,700); // 리셋
    ctx.fill(ball);
}

// ==================새로고침 후 이전에 찍힌 원의 흔적 남기기(상태값 유지)==============
// 상태를 남기는 3가지 방법 localStorage,server,queryString

// ------------------상태관리--------------------
var x = localStorage.getItem("x") || 100; // 상태값을 가져온다.
var y = localStorage.getItem('y') || 100;
console.log(typeof localStorage.getItem("y")); 

canvas.onclick = function(e){
    x = e.x;
    y = e.y;

    localStorage.setItem('x', x); // 상태값을 남긴다.
    localStorage.setItem('y', y);
};

// -------------------그림그리기-------------------
var ball = new Path2D();
ball.arc(x,y,30,0,Math.PI*2);
ctx.clearRect(0,0,900,700); // 리셋
ctx.fill(ball);

// ================ 점진적으로 원 옮기기(setInterver)=========
/** @type {CanvasRenderingContext2D} */
var canvas = document.querySelector("#canvas");
//------------------상태관리--------------------
var x = localStorage.getItem("x") || 100; // 상태값을 가져온다.
var y = localStorage.getItem('y') || 100;
console.log(typeof localStorage.getItem("y")); 

// ------------------x,y값 설정------------------
canvas.onclick = function(e){
    x = e.x;
    y = e.y;

    localStorage.setItem('x', x); // 상태값을 남긴다.
    localStorage.setItem('y', y);
};

// -----------------그림그리기----------------------
window.setInterval(function(){
    x++;
    var ctx = canvas.getContext("2d");
    var ball = new Path2D();
    ball.arc(x,y,30,0,Math.PI*2);
    ctx.clearRect(0,0,900,700);
    ctx.fill(ball);
}, 50);