function Ball(x,y,color) {
    this.x = x || 100;
    this.y = y || 100;
    this.vx = 0;
    this.vy = 0;
    this.dx = 0;
    this.dy = 0;
    this.color = color || "black";
}

Ball.prototype.moveTo = function(dx,dy){
    this.dx = dx;
    this.dy = dy;

    var w = (this.dx-this.x);
    var h = (this.dy-this.y);
    var d = Math.sqrt(w*w+h*h);
    this.vx = w/d;
    this.vy = h/d;
};

Ball.prototype.update = function(){
    if(
        (x-1<dx&&dx<x+1)&&
        (y-1<dy&&dy<y+1)
    ){
        vx=0;
        vy=0;
    } // 멈추기, 자바스크립트 실수에 대한 성격때문에 범위로 멈추는 작업을 해준다

    x+= vx; //누적해서 x값으로 이동
    y+= vy; //누적해서 y값으로 이동
}

Ball.prototype.draw = function(ctx){
    var ball = new Path2D();
    ball.arc(x,y,30,0,Math.PI*2);
    ctx.clearRect(0,0,900,700);
    ctx.fill(ball);
}