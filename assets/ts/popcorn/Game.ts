import {settings} from "./settings";
import {Projectile} from "./Projectile";
import {Animation} from "../framework25/Animation";
import {Collision} from "../framework25/helpers/Collision";

export class Game {
    //cree des element avec leurs type de variabels
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private sprite: HTMLImageElement;
    private animation: Animation;

    constructor() {
        //cibler le canvas
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        //cree le context de 2D
        this.ctx = this.canvas.getContext('2d');
        //creation de l'element animation
        this.animation = new Animation(this.canvas, this.ctx);
        //importer l'image
        this.sprite = new Image();
        //le sources de l'image
        this.sprite.src = settings.sprite;
        //dire quon telecharche l'img aux chargement puis on commence l'animation
        this.sprite.addEventListener('load', () => {
            this.animation.start();
        });

        //ce bloc permet de connaitre la la possition des element dans le canvas et non a partir de l'ecrant
        this.canvas.addEventListener('click', (evt: MouseEvent) => {
            /*
            //conaitre les position x et y mais pour les requeperere on doit metre evt :MouseEvent
            Console.log(e. ct.clienX, evt .clienY)
            ..quand on clique on il prned la position de la fenêtre duc anvas
            //pour resoudre ce problement on a un nouvelle methode
            * */
            const correctedX = evt.clientX - this.canvas.getBoundingClientRect().x;
            const correctedY = evt.clientY - this.canvas.getBoundingClientRect().y;
            console.log(correctedX, correctedY)
            this.animation.iAnimatables.forEach((projectile: Projectile) => {
                if (Collision.isPointInRotatedRectangle(
                    projectile.frame.dw,
                    projectile.frame.dh,
                    projectile.position,
                    projectile.rotation,
                    {
                        x: correctedX,
                        y: correctedY,
                    }
                )) {
                    //si le projectile est inferrieir a 0 alors on arreter le jeux
                    if (projectile.hiddenNumber < 0) {
                        this.animation.stop();
                    } else {
                        //savoir quand on touche un popCorns et sa position
                        console.log("À vous de jouer !! ")
                    }

                }
            })
        })
        //appele des methode
        this.generatePopcorns();
        this.generateCorns();
    }


    //metgode pour generer les diiferent Pocorne aleatoirement
    private generatePopcorns() {
        for (let i = 0; i < settings.popcorns.length; i++) {
            this.animation.registeriAnimatable(new Projectile(this.ctx, this.canvas, this.sprite, settings.popcorns[i], 0, i));
        }
    }

    //metgode pour generer les diiferent corns aleatoirement
    private generateCorns() {
        for (let i = 0; i < settings.corns.length; i++) {
            this.animation.registeriAnimatable(new Projectile(this.ctx, this.canvas, this.sprite, settings.corns[i], 0, -1));
        }
    }
}