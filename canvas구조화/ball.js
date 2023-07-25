function Ball(x,y,color) {
    this.x = x || 100;
    this.y = y || 100;
    this.vx = 0;
    this.vy = 0;
    this.dx = 0;
    this.dy = 0;
    this.color = color || "black";
    this.isActive = false; // 내가 선택한 볼을 표기(테두리)하기 위한 활성화멤버변수
}

Ball.prototype = {
    constructor: Ball, // 기본생성자 x.prototype을 사용하면, 생성자가 사라진다. 그래서 새로 지정해준다.

    moveTo : function(dx,dy){
        this.dx = dx;
        this.dy = dy;
    
        var w = (this.dx-this.x);
        var h = (this.dy-this.y);
        var d = Math.sqrt(w*w+h*h);
        this.vx = w/d;
        this.vy = h/d;
    },
    update : function(){
        if(
            (this.x-1<this.dx&&this.dx<this.x+1)&&
            (this.y-1<this.dy&&this.dy<this.y+1)
        ){
            this.vx=0;
            this.vy=0;
        } // 멈추기, 자바스크립트 실수에 대한 성격때문에 범위로 멈추는 작업을 해준다
    
        this.x+= this.vx; //누적해서 x값으로 이동
        this.y+= this.vy; //누적해서 y값으로 이동
        console.log(this.x, this.y);
    },

    draw : function(ctx){
        var shape = new Path2D();
        shape.arc(this.x,this.y,30,0,Math.PI*2);
        // 왜 색깔을 바꾸고 다시 색깔을 되돌리지? -> 다음 그림 색깔에 영향을 안주기위해서!
        // ctx.clearRect(0,0,900,700); 공이 그려질 때 마다 이전 공이사라지기 때문에 주석처리.
        var originColor = ctx.fillStyle;
        ctx.fillStyle = this.color;
        ctx.fill(shape); //설정된 값을 바탕으로 그린다.
        ctx.fillStyle = originColor;

        if(this.isActive) { // 클릭하면, 테두리 문양이 생긴다.
            var originColor = ctx.strokeStyle;
            ctx.strokeStyle = 'red'; // 1.활성화된 원에 빨간색 테두리를 두른다
            ctx.lineWidth=5; // 테두리 폭
            ctx.stroke(shape); // 설정된 값을 바탕으로 그린다.
            ctx.strokeStyle = originColor; // 원래 색으로 되돌린다.
        }
    },

    setActive : function(active){  // Active를 키거나 닫는 함수.
        if(active === undefined) { 
            this.isActive = true;
            return;
        }

        this.isActive = active; // active = false -> false 문양이 안생김
    },

    isLocated : function(x,y) {
        var result = this.x - 30 < x&& // 찍은 값이 원 안에 들어간다 = 반지름x,y보다 작다
                    x < this.x + 30 && // 결과값이 true아니면 false다.
                    this.y - 30 < y &&
                    y < this.y + 30;

        return result;
    }
};
