/** @type {CanvasRenderingContext2D} */
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

var ball1 = new Ball(100,100,"black"); // 객체생성
var ball2 = new Ball(200,100,"blue");

var balls = [];
balls.push(ball1);
balls.push(ball2);
var curBall = ball1; // 내가 찍은 공
curBall.setActive(); // 내가 선택한 공을 활성화한다.

// ------------------캔버스 클릭시 x,y값 설정------------------
canvas.onclick = function(e){

    // 배열로 문장 중복 줄이기
    for(var ball of balls) {
        if(ball.isLocated(e.x, e.y))
        {
            curBall.setActive(false); // 왜 false로 했는지 생각해보자 ->테두리 문양을 없앤다
            curBall = ball;
            curBall.setActive();
            return;
        }
    }

    curBall.moveTo(e.x,e.y); // 원밖에 찍는경우 curBall을 이동시킨다.
};

// -----------------그림그리기----------------------
window.setInterval(function(){

    // ================충돌(두 원 반지름의 합이 지름과 같으면 충돌한다는 아이디어를 이용한다.)==================
    for (var ball of balls) { // 볼 전체를 순회한다.
        // 만약 ball이 curBall과 같다면 다음 턴으로 이동
        if(ball === curBall){ // 왜 '=='이 아니고 '==='이지? -> 객체가 같아야한다. 같은 값을 가져도 다른 공인 경우가 있다.
            continue;
        }
    }

    // 값을 변경한다.
    for(var ball of balls)
        ball.update();

    ctx.clearRect(0,0,900,700); // 이전에 그려졌던 원을 지운다. 원을 지우지 않으면 데이터가 업데이트 되지 않은 원이 남고 잔상처럼 남는다.
    // 그림을 그린다.
    for(var ball of balls)
        ball.draw(ctx);


}, 17);
