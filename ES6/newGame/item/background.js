export default class Background {
    #x;
    #y;
    #img;

    constructor(x=0, y=0){
        this.#x = x;
        this.#y = y;
        this.#img = document.querySelector(".d-none2");
    }
    
    /** @param {CanvasRenderingContext2D} ctx */
    draw(ctx) {
        ctx.drawImage(this.#img,0,0); 
    }
}