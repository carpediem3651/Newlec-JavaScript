//import는 객체를 보내고 받을 수 있다.
import Boy from '../item/boy.js'

export default class GameCanvas{
    #obj;
    #ctx;
    #boy;

    constructor() {
        /** @type {HTMLCanvasElement} */
        this.#obj = document.querySelector("#canvas");
        this.#obj.focus(); // 프로그램이 load될 때 focus()로 인해 선택된다.
        this.#ctx = canvas.getContext("2d");
        this.#boy = new Boy(300, 200); //x, y

        this.#obj.onkeydown = function(){ // 명령을 위한 윈도우 API. canvas에는 키보드 입력이 적용되지 않아. tabIndex가 필요하다. 프로그램을 실행하자마자 이를 적용하기 위해 obj(canvas)에 focus()해준다. 
            console.log("key down")
        }.bind(this)
    }

    run() {
        setInterval(() => {
            this.#boy.update(); // 캐릭터 움직임을 위한 메서드

            this.#ctx.clearRect(0,0,1000,1000); // 캔버스 그림의 잔상을 지운다.
            this.#boy.draw(this.#ctx);
        },17)
    }
}