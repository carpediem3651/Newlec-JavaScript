class Ball {
    // ============ 기본 생성===============
    #x;
    #y;
    #vx;
    #vy;
    #dx;
    #dy;
    #color;
    #isActive; // 내가 선택한 볼을 표기(테두리)하기 위한 활성화멤버변수
    #radius;
    #speed;

    constructor(x=100,y=100, color="black") {
        this.#x = x;
        this.#y = y;
        this.#vx = 0;
        this.#vy = 0;
        this.#dx = 0;
        this.#dy = 0;
        this.#color;
        this.#isActive = false; // 내가 선택한 볼을 표기(테두리)하기 위한 활성화멤버변수
        this.#radius = 30;
        this.#speed = 3;
    }

    // =================== 함수=====================
    
    moveTo(dx,dy) {
        this.#dx = dx;
        this.#dy = dy;
    
        let w = (this.#dx-this.#x);
        let h = (this.#dy-this.#y);
        let d = Math.sqrt(w*w+h*h);
        this.#vx = w/d; //vx와 vy는 뭘까?
        this.#vy = h/d;
    }

    update() { // update의 의미가 뭔지 생각해보자. 내부에서 모양의 변화가 생기면 update를 쓴다.
        if(
            (this.#x-1<this.#dx&&this.#dx<this.#x+1)&&
            (this.#y-1<this.#dy&&this.#dy<this.#y+1)
        ){
            this.#vx=0;
            this.#vy=0;
        } // 멈추기, 자바스크립트 실수에 대한 성격때문에 범위로 멈추는 작업을 해준다
    
        this.#x+= this.#vx*this.#speed; //누적해서 x값으로 이동, 속도조절
        this.#y+= this.#vy*this.#speed; //누적해서 y값으로 이동, 속도조절
    }

    draw(ctx) {
        var shape = new Path2D();
        shape.arc(this.#x,this.#y,this.#radius,0,Math.PI*2);
        // 왜 색깔을 바꾸고 다시 색깔을 되돌리지? -> 다음 그림(다른그림) 색깔에 영향을 안주기위해서!
        // ctx.clearRect(0,0,900,700); 공이 그려질 때 마다 이전 공이사라지기 때문에 주석처리.
        var originColor = ctx.fillStyle;
        ctx.fillStyle = this.#color;
        ctx.fill(shape); //설정된 값을 바탕으로 그린다.
        ctx.fillStyle = originColor;

        if(this.#isActive) { // 클릭하면, 테두리 문양이 생긴다.
            var originColor = ctx.strokeStyle;
            ctx.strokeStyle = 'red'; // 1.활성화된 원에 빨간색 테두리를 두른다
            ctx.lineWidth=5; // 테두리 폭
            ctx.stroke(shape); // 설정된 값을 바탕으로 그린다.
            ctx.strokeStyle = originColor; // 원래 색으로 되돌린다.
        }
    }

    setActive(active) {  // Active를 키거나 닫는 함수.
        if(active === undefined) { 
            this.#isActive = true;
            return;
        }

        this.#isActive = active; // active = false -> false 문양이 안생김
    }

    isLocated(x,y) {
        var result = this.#x - this.#radius < x&& // 찍은 값이 원 안에 들어간다 = 반지름x,y보다 작다
                    x < this.#x + this.#radius && // 결과값이 true아니면 false다.
                    this.#y - this.#radius < y &&
                    y < this.#y + this.#radius;
        return result;
    }
}
