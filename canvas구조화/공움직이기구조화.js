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

var upButton = new Button(570,30,30); 

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

        // d와 r구하기
        var w = curBall.x - ball.x; // 내가 움직이는 원과 멈춰있는 원이 있는 x좌표의 거리
        var h = curBall.y - ball.y; // 내가 움직이는 원과 멈춰있는 원이 있는 y좌표의 거리 
        var d = Math.sqrt(w*w+h*h); // 피타고라스 정리의 빗변으로 '지름'을 구한다.
        var rSum = curBall.radius + ball.radius; //두 원 반지름의 합

        // 충돌이 발생한다면 공이 사라진다.
        if(d <= rSum){ //왜 반지름의 합이 d보다 클 때도 이 조건이지?
            var idxBall = balls.indexOf(ball); // 충돌된 ball의 인덱스를 찾아
            balls.splice(idxBall,1); // 배열에서 삭제한다 = ball이 사라진다.
        }
    }

    // 값을 변경한다.
    for(var ball of balls)
        ball.update();

    ctx.clearRect(0,0,900,700); // 이전에 그려졌던 원을 지운다. 원을 지우지 않으면 잔상처럼 남는다.
    // 그림을 그린다.
    for(var ball of balls)
        ball.draw(ctx);

    // 삼각형 버튼 구조화 
    upButton.draw(ctx);

    // ============== 삼각형 버튼 만들기 ===============
    // 버튼 삼각형 모양 볼의 위치보다 위로올라가기위해 여기에 위치
    // 삼각형이 놓인 중심 축과 반지름
    // var bx = 570;
    // var by = 30;
    // var br = 30;

    // //피타고라스 정리를 통해 구한 빗변 hw
    // var hw = Math.sqrt(br*br - br/2*br/2);
    // var pos1 = {x:bx, y:by-br}; // y값은 반지름만큼 중심축에서 위로 올라가니깐 반지름을 뺀다
    // var pos2 = {x:bx-hw, y:by+(br/2)};
    // var pos3 = {x:bx+hw, y:by+(br/2)};
    
    // var btnShape = new Path2D();
    // btnShape.moveTo(pos1.x, pos1.y);
    // btnShape.lineTo(pos2.x, pos2.y);
    // btnShape.lineTo(pos3.x, pos3.y);

    // // 왜 색깔을 바꾸고 다시 색깔을 되돌리지? -> 다음 그림(다른그림) 색깔에 영향을 안주기위해서!
    // var originFillStyle = ctx.fillStyle;
    // ctx.fillStyle = "orange";
    // ctx.fill(btnShape);
    // ctx.fillStyle = originFillStyle;

}, 17);
