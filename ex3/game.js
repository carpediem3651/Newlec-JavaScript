/** @type {HTMLCanvasElement} */
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

// ================클릭에 따른 변화===================

canvas.onclick= function(e){ // 클릭이라는 이벤트가 발생한다.
    console.log(e.x, e.y); // 좌표를 찍는다.
 
    var ball2 = new Path2D(); // 찍은 좌표에 따라 원이 그려진다.
    ball2.arc(e.x,e.y,30,0,Math.PI*2); //원의 모양을 그린다.
    ctx.fill(ball2); // 원안의 색을 채운다.
}




