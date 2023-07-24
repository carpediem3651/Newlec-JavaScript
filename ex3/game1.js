//=====================두개의 공 띄우기(구조화)=========================
/** @type {CanvasRenderingContext2D} */
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

var ball1 = new Ball(100,100,"black");


// ------------------x,y값 설정------------------
canvas.onclick = function(e){
    ball1.moveTo(e.x,e.y);
};

// -----------------그림그리기----------------------
window.setInterval(function(){
    // 값을 변경한다.
    ball1.update();

    // 그림을 그린다.
    ball1.draw(ctx);

}, 50);
