// =================== 원하는 곳(찍은곳)으로 원 점진적으로 옮기기(애니메이션)=============
/** @type {CanvasRenderingContext2D} */
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

var x = 100; // 찍기 전 초기 x,y값
var y = 100; 
var vx = 0; //x에서 dx로 이동하기 위한 너비
var vy = 0;
var dx = 0; // 찍는 x,y값
var dy = 0;

// ------------------x,y값 설정------------------
canvas.onclick = function(e){
    dx = e.x; //dx : 이동하기위해 찍은 x값
    dy = e.y; //dy : 이동하기위해 찍은 y값

    var w = (dx-x); // 이동하기위한 너비
    var h = (dy-y); // 이동하기위한 높이
    var d = Math.sqrt(w*w+h*h); //이동하기위한 빗변
    vx = w/d; // vx? 1을 가기위한 단위 너비
    vy = h/d; // vy? 1을 가기위한 단위 높이

};

// -----------------그림그리기----------------------
window.setInterval(function(){
    if(
        (x-1<dx&&dx<x+1)&&
        (y-1<dy&&dy<y+1)
    ){
        vx=0;
        vy=0;
    } // 멈추기, 자바스크립트 실수에 대한 성격때문에 범위로 멈추는 작업을 해준다

    x+= vx; //누적해서 x값으로 이동
    y+= vy; //누적해서 y값으로 이동
    
    ctx.fillStyle = 'blue';
    ball.arc(x,y,30,0,Math.PI*2);
    ctx.clearRect(0,0,900,700);
    ctx.fill(ball);
}, 50);








