export default class Girl {
    #x;
    #y;
    #img;
    #imgWalkingIndex; // 캐릭터 소스 문서의 캐릭터들을 세로로 하나씩 바꾸기 위한 변수
    #walkingDelay; // 이미지 움직임 속도를 늦추기 위한 변수

    constructor(x=0, y=0){
        this.#x = x;
        this.#y = y;
        this.#img = document.querySelector("img");
        this.#img = document.querySelector("#girl");
        this.#imgWalkingIndex = 0;
        this.#walkingDelay = 15; 
    }

    update(){ // *업데이트 메서드 이해하기!
        // 업데이트 속도 조절하기
        if(this.#walkingDelay == 0) { // walkingDelay 변수를 둠으로써 캐릭터 움직임 속도에 제한을 둔다.
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
        ctx.drawImage(this.#img, 0, h*this.#imgWalkingIndex , w, h, this.#x-w/2, this.#y-h/2, w*2, h*2); //h*this.#imgWalkingIndex 캐릭터 소스문서에서 세로로 하나씩 그림을 바꾸기 위한 코드이다.
        // ctx.drawImage(this.#img, 144 , 0 , 48, 48, this.#x, this.#y, 48*2, 48*2)
        // ctx.arc(this.#x, this.#y, 3, 0, Math.PI*2); // 캐릭터 중심점 확인
        // ctx.stroke();
    }
}