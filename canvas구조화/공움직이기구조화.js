/** @type {CanvasRenderingContext2D} */
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

var ball1 = new Ball(100,100,"black"); // 객체생성
var ball2 = new Ball(200,100,"blue");
// var balls = [];
// balls.push(ball1);
// balls.push(ball2);
var curBall = ball1; // 내가 찍은 공
curBall.setActive(); // 내가 선택한 공을 활성화한다.


// ------------------캔버스 클릭시 x,y값 설정------------------
canvas.onclick = function(e){

    // for문으로 아래 문장 중복 줄이기
    // for(var i=0; i<balls.length; i++) {
    //     if(balls[i].isLocated(e.x, e.y))
    //     {
    //         curBall.setActive(false); // 왜 false로 했는지 생각해보자
    //         curBall = balls[i];
    //         curBall.setActive();
    //         return;
    //     }
    // }

    // 선택한 원에 빨간 테두리 그리기
    if(ball1.isLocated(e.x, e.y))
    {
        curBall.setActive(false); // 이전에 표시되었던 공의 빨간 테두리를 꺼버리기 위해 사용한다.
        
        curBall = ball1;
        curBall.setActive();
        return; // 코드블럭을 벗어난다.
    }

    if(ball2.isLocated(e.x,e.y))
    {
        curBall.setActive(false);
        curBall = ball2;
        curBall.setActive();
        return;
    }

    curBall.moveTo(e.x,e.y); // 원밖에 찍는경우 curBall을 이동시킨다.
};

// -----------------그림그리기----------------------
window.setInterval(function(){

    // 아래문장 중복처리
    // for(var i=0; i<balls.length; i++) {
    //     balls[0].update();
    //     balls[1].update();
    
    //     ctx.clearRect(0,0,900,700); // 왜 이게 여기에 들어갈까?
        
    //     balls[0].draw(ctx);
    //     balls[1].draw(ctx);
    // }

    // 값을 변경한다.
    ball1.update(); // Q.왜 update()와 draw()를 몰아줬을까?
    ball2.update();

    ctx.clearRect(0,0,900,700); // 이전에 그려졌던 원을 지운다. 원을 지우지 않으면 잔상처럼 남는다.
    // 그림을 그린다.
    ball1.draw(ctx); // 그림을 그린다.
    ball2.draw(ctx);

    // for(var i=0; i<balls.length; i++) {
    //     balls[i].update();
    //     balls[i].draw();
    // }

}, 50);
