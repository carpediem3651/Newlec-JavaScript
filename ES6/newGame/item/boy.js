export default class Boy {
    #x
    #y
    #img
    constructor(x=0, y=0){
        this.#x = x
        this.#y = y
        this.#img = document.querySelector("img")
    }
    
    /** @param {CanvasRenderingContext2D} ctx */
    draw(ctx) {
        // ctx.drawImage(this.#img, this.#x, this.#y)
        ctx.drawImage(this.#img, 0 , 0 , 48, 48, this.#x, this.#y, 48, 48)
    }
}