export default class Background {
    #x
    #y
    #width
    #height
    #img

    constructor(x, y){
        this.#img = document.querySelector(".map1");
        this.#width = this.#img.width;
        this.#height = this.#img.height;
        this.#x = x;// - this.#width/2;
        this.#y = y;// - this.#height/2;
    }

    update(){

    }

    /** @param {CanvasRenderingContext2D} ctx */
    draw(ctx){
        let offX = this.#width / 2;
        let offY = this.#height / 2;

        //let offPos = {x:this.#width / 2, y:this.#height / 2};

        ctx.drawImage(this.#img, this.#x-offX, this.#y-offY);
    }
}