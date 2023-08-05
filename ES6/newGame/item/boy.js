export default class Boy {
    #x;
    #y;
    #img;
    #imgWalkingIndex; // 캐릭터 소스 문서의 캐릭터들을 세로로 하나씩 바꾸기 위한 변수
    #walkingDelay; // 이미지 움직임 속도를 늦추기 위한 변수
    #imgDirectionIndex; // 캐릭터 방향 변수
    #isWalking;
    #moveUp;
    #moveDown;
    #moveLeft;
    #moveRight;

    constructor(x=0, y=0){
        this.#x = x;
        this.#y = y;
        this.#img = document.querySelector("img");
        this.#imgWalkingIndex = 0;
        this.#walkingDelay = 0;
        this.#imgDirectionIndex = 0;
        this.#isWalking = false; // 캐릭터의 초기값을 false로 설정하여 움직이지 않는다.
        this.#moveUp = false;
        this.#moveDown = false;
        this.#moveLeft = false;
        this.#moveRight = false; 
    }

    // 캐릭터 위치 변화의 증감을 멈추는 코드
    stopTo(direction) {
        switch(direction) {
            case "up":
                this.#moveUp =false;
                break;
            case "down":
                this.#moveDown = false;
                break;
            case "left":
                this.#moveLeft = false;
                break;
            case "right":
                this.#moveRight=false;
                break;
        }
        // this.#isWalking = false; // 움직이지 않는다.

        // ----------------동작을 멈추는 기능------------------
        // 키를 떼면 동작이 멈춘다. this.#isWaling의 결과값은 'false'다
        this.#isWalking = this.#moveUp ||
                        this.#moveDown ||
                        this.#moveLeft ||
                        this.#moveRight;

        if(!this.#isWalking){ //!this.#isWaling(false)은 True이기 때문에 아래 실행.
            this.#imgDirectionIndex = 0;
            this.#imgWalkingIndex = 0;
        }
    }

    // 캐릭터의 상태변화
    moveTo(direction) { // 키보드 단축키에 따라 캐릭터의 방향이 바뀐다. 움직임에 대한 상태가 변화한다.
        switch(direction) {
            case "up":
                this.#imgDirectionIndex=2;
                this.#moveUp =true;
                break;
            case "down":
                this.#imgDirectionIndex=0;
                this.#moveDown = true;
                break;
            case "left":
                this.#imgDirectionIndex=1;
                this.#moveLeft = true;
                break;
            case "right":
                this.#imgDirectionIndex=3;
                this.#moveRight=true;
                break;
        }
        this.#isWalking = true;
    }

    // 캐릭터의 이동을 담당한다.
    update(){ 
        if(!this.#isWalking) //iswalking이 false면 움직이지 않는다. else if 를 많이 쓰지 않는다.
            return;

        // 이동에 대한 코드
        if(this.#moveUp) this.#y--;
        if(this.#moveDown) this.#y++;
        if(this.#moveLeft) this.#x--;
        if(this.#moveRight) this.#x++;

        // 캐릭터 상태변화 속도 조절하기, 걷는 동작과 관련된 코드
        if(this.#isWalking && this.#walkingDelay == 0) { // walkingDelay 변수를 둠으로써 캐릭터 움직임 속도에 제한을 둔다.
            this.#imgWalkingIndex++; // walkingDelay가 0이 되면 다음 캐릭터로 바꾼다.
            this.#walkingDelay = 10;
        }
        this.#imgWalkingIndex %= 4; // 캐릭터는 4개. 캐릭터 개수가 5를 안넘어가게 하는 변수
        this.#walkingDelay--;
    }
    
    /** @param {CanvasRenderingContext2D} ctx */
    draw(ctx) {
        let w = 48; // 캐릭터의 크기 넓이
        let h = 48; // 높이
        // ctx.drawImage(this.#img, this.#x, this.#y)
        ctx.drawImage(
            // --------- 이미지----------
            this.#img,

            // --------- 캐릭터 속성-----------
            w*this.#imgDirectionIndex, // 캐릭터 방향
            h*this.#imgWalkingIndex, // 움직임 별 인덱스
            w, // 캐릭터 넓이
            h, // 캐릭터 높이

            // --------- 캐릭터 위치------------
            this.#x-w/2, // 캔버스 위 x좌표 
            this.#y-h/2, // 캔버스 위 y좌표
            w*2, // 크기
            h*2 // 높이
            ); //h*this.#imgWalkingIndex 캐릭터 소스문서에서 세로로 하나씩 그림을 바꾸기 위한 코드이다.
        // ctx.drawImage(this.#img, 144 , 0 , 48, 48, this.#x, this.#y, 48*2, 48*2)
        // ctx.arc(this.#x, this.#y, 3, 0, Math.PI*2); // 캐릭터 중심점 확인
        // ctx.stroke();
    }
}