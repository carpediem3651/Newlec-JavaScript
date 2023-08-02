//import는 객체를 보내고 받을 수 있다.
import Boy from '../item/boy.js'

export default class IntroCanvas{
    #obj
    #ctx
    #boy
    constructor() {
        /** @type {HTMLCanvasElement} */
        this.#obj = document.querySelector("#canvas")
        this.#ctx = canvas.getContext("2d")
        this.#boy = new Boy(300, 200) //x, y
    }

    run() {
        setInterval(() => {
            this.#boy.draw(this.#ctx)
        },17)
    }
}