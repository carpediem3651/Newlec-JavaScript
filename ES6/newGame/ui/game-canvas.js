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

        this.#obj.onkeydown = function(e){ // 명령을 위한 윈도우 API. canvas에는 키보드 입력이 적용되지 않아. tabIndex가 필요하다. 프로그램을 실행하자마자 이를 적용하기 위해 obj(canvas)에 focus()해준다. 
            console.log("key down", e.key, e.code)

            // *******플랫폼과 연결성을 느슨하게 만드는 역할
            switch(e.key){
                case "ArrowUp" :
                    this.#boy.moveTo("up");
                    break;
                case "ArrowDown" :
                    this.#boy.moveTo("down");
                    break;
                case "ArrowLeft" :
                    this.#boy.moveTo("left");
                    break;
                case "ArrowRight" :
                    this.#boy.moveTo("right");
                    break;  
            }
        }.bind(this)

        // 키보드의 키를 떼는 코드
        this.#obj.onkeyup = function(e) {
            console.log("key up", e.key);

            // *******플랫폼과 연결성을 느슨하게 만드는 역할
            switch(e.key){
                case "ArrowUp" :
                    this.#boy.stopTo("up");
                    break;
                case "ArrowDown" :
                    this.#boy.stopTo("down");
                    break;
                case "ArrowLeft" :
                    this.#boy.stopTo("left");
                    break;
                case "ArrowRight" :
                    this.#boy.stopTo("right");
                    break;  
            }
        }.bind(this)
    }

    run() {
        setInterval(() => {
            this.#boy.update(); // 캐릭터 움직임을 위한 메서드

            // this.#ctx.clearRect(0,0,1000,1000); // 캔버스 그림의 잔상을 지운다.
            
            this.#boy.draw(this.#ctx);
        },17)
    }
}