import {DrawFrame} from "../framework25/DrawFrame";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {iFrame} from "../framework25/types/iFrame";
import {Vector} from "../framework25/Vector";
import {randomInt} from "../framework25/helpers/random";

export class Projectile extends DrawFrame implements iAnimatable {
    shouldBeRemoved: boolean = false;

    private position:Vector;
    private speed:Vector;
    private acceleration:Vector;
    private canvas: HTMLCanvasElement


    constructor(ctx: CanvasRenderingContext2D, canvas:HTMLCanvasElement,  sprite: HTMLImageElement, frame: iFrame, rotation: number) {
        super(ctx, sprite, frame, rotation);
        this.position = new Vector({
            y:this.canvas.height+this.frame.sh / 2,
            x:randomInt(this.frame.sw/2, this.canvas.width-this.frame.sw/2)
        })

    }

    animate(): void {

    }


}