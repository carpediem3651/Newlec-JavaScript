export default class Boy {
    #x;
    #y;
    #img;
    #imgWalkingIndex; // 캐릭터 소스 문서의 캐릭터들을 세로로 하나씩 바꾸기 위한 변수
    #walkingDelay; // 이미지 움직임 속도를 늦추기 위한 변수
    #imgDirectionIndex; // 캐릭터 방향 변수
    #isWalking;

    constructor(x=0, y=0){
        this.#x = x;
        this.#y = y;
        this.#img = document.querySelector("img");
        this.#imgWalkingIndex = 0;
        this.#walkingDelay = 0;
        this.#imgDirectionIndex = 0;
        this.#isWalking = false; // 캐릭터의 초기값을 false로 설정하여 움직이지 않는다. 
    }

    moveTo(x,y) {
        this.#isWalking = true;
    }

    update(){
        // 업데이트 속도 조절하기
        if(this.#isWalking && this.#walkingDelay == 0) { // walkingDelay 변수를 둠으로써 캐릭터 움직임 속도에 제한을 둔다.
            this.#imgWalkingIndex++; // walkingDelay가 0이 되면 다음 캐릭터로 바꾼다.
            this.#walkingDelay = 15;
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