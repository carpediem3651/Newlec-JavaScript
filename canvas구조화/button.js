function Button(x,y,radius) {
    this.x = x || 0; // x에 값이 안들어오면 0으로 초기화한다.
    this.y = y || 0;
    this.radius = 30;
}

Button.prototype = {
    constructor : Button,
    draw: function(){
        // 삼각형이 놓인 중심 축과 반지름
        var d = this.radius;

        //피타고라스 정리를 통해 구한 빗변 hw
        var hw = Math.sqrt(d*d - (d/2)*(d/2));
        var pos1 = {x:this.x, y:this.y-d}; // y값은 반지름만큼 중심축에서 위로 올라가니깐 반지름을 뺀다
        var pos2 = {x:this.x-hw, y:this.y+(d/2)};
        var pos3 = {x:this.x+hw, y:this.y+(d/2)};
        
        var btnShape = new Path2D();
        btnShape.moveTo(pos1.x, pos1.y);
        btnShape.lineTo(pos2.x, pos2.y);
        btnShape.lineTo(pos3.x, pos3.y);

        // 왜 색깔을 바꾸고 다시 색깔을 되돌리지? -> 다음 그림(다른그림) 색깔에 영향을 안주기위해서!
        var originFillStyle = ctx.fillStyle;
        ctx.fillStyle = "orange";
        ctx.fill(btnShape);
        ctx.fillStyle = originFillStyle;

    }
}