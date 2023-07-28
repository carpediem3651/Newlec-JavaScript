function Button(x,y,radius) {
    this.x = x || 0; // x에 값이 안들어오면 0으로 초기화한다.
    this.y = y || 0;
    this.radius = 30;
    this.pos=1;
    this.invalide(); 
}

Button.prototype = {
    constructor : Button,
    update: function(){ // update의 의미가 뭔지 생각해보자. 클래스 내부에서 모양의 변화가 생기면 update를 쓴다.
        // 별을 심장처럼 뛰게 만든다.
        // this.radius += this.pos;
        // if(this.radius == 40){
        //     this.pos *= -1; // Button 객체의 pos값을 음수로 바꾼다.
        // } else if(this.radius ==0) {
        //     this.pos *= -1; //Button 객체의 pos값을 양수로 바꾼다.
        // }
        this.radius++;
        this.invalide(); // 업데이트 될 때 마다 삼각형의 모양을 바꾼다
        if(this.radius >= 40){
            this.radius = 0;
        }
        this.invalide();
        
    },

    draw: function(){
        // 왜 색깔을 바꾸고 다시 색깔을 되돌리지? -> 다음 그림(다른그림) 색깔에 영향을 안주기위해서!
        var originFillStyle = ctx.fillStyle;
        ctx.fillStyle = "orange";
        ctx.fill(this.shapePath);
        ctx.fillStyle = originFillStyle;
    },

    isLocated : function(x,y) { // 삼각형 버튼안에 클릭이 됐다는 걸 확인하는 메소드
        var isIn = ctx.isPointInPath(this.shapePath, x, y);
        return isIn;
    },

    invalide: function(){ //반지름 d를 바탕으로 사각형 좌표의 위치를 잡는다. 그림을 그리기 전에 항상 이 작업을 해줘야한다.
        var d = this.radius;
        var hw = Math.sqrt(d*d-(d/2)*(d/2));
        var pos1 = {x:this.x, y:this.y-d};
        var pos2 = {x:this.x-hw, y:this.y+(d/2)};
        var pos3 = {x:this.x+hw, y:this.y+(d/2)};
    
        this.shapePath = new Path2D(); // Path2D는 그림 그리는데에 moveTo, lineTo같은 명령어를 이용하기 위해 쓴다.
        this.shapePath.moveTo(pos1.x, pos1.y);
        this.shapePath.lineTo(pos2.x, pos2.y);
        this.shapePath.lineTo(pos3.x, pos3.y);
    },

    action : function() {
        this.radius =40;
        //누른 버튼이 upbutton이면,
        //ball.js의 speed가 증가한다.
        

        //누른 버튼이 downButton이면,
        //ball.js의 speed가 감소한다.
        this.invalide();
    },
}
