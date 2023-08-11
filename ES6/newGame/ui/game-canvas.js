//import는 객체를 보내고 받을 수 있다.
import Boy from '../item/boy.js'
import Background from '../item/background.js'

export default class GameCanvas{
    #obj
    #ctx
    #boy
    #background
    
    constructor(){
        /** @type {HTMLCanvasElement} */
        //var canvas = document.body.firstElementChild
        this.#obj = document.querySelector("#canvas")
        this.#obj.focus();
        this.#ctx = canvas.getContext("2d")
        this.#boy = new Boy(300,200) // x,
        this.#boy.onOutOfBounds = function(e) { // 콜백함수
            console.log("앗 전화가 왔네?", "경계선에 닿았네? 근데 어디?")
            console.log(e.border);
        }        
        this.#background = new Background(450,350);
        
        this.#obj.onkeydown = function(e){
            // console.log("key down", e.key, e.code);
            // console.log(e.key == "ArrowRight")

            // 플랫폼과의 연결성을 느슨하게 만드는 역할
            switch(e.key){
                case "ArrowUp":
                    this.#boy.moveTo("up")
                    break;
                case "ArrowDown":
                    this.#boy.moveTo("down")
                    break;
                case "ArrowLeft":
                    this.#boy.moveTo("left")
                    break;
                case "ArrowRight":
                    this.#boy.moveTo("right")
                    break;

            }
            //this.#boy.moveTo(100,100);
        }.bind(this);

        this.#obj.onkeyup = function(e){
            console.log("key up", e.key, e.code)            

            // 플랫폼과의 연결성을 느슨하게 만드는 역할
            switch(e.key){
                case "ArrowUp":
                    this.#boy.stopTo("up")
                    break;
                case "ArrowDown":
                    this.#boy.stopTo("down")
                    break;
                case "ArrowLeft":
                    this.#boy.stopTo("left")
                    break;
                case "ArrowRight":
                    this.#boy.stopTo("right")
                    break;

            }
            //this.#boy.moveTo(100,100);
        }.bind(this);
    }

    run(){      
        setInterval(()=>{
            this.#background.update();
            this.#boy.update();
            
            //this.#ctx.clearRect(0,0,900,700)
            //this.#background.draw(this.#ctx);
            this.#background.draw(this.#ctx);
            this.#boy.draw(this.#ctx);
        },17)
    }
}