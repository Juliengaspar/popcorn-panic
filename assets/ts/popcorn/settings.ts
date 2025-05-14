export const settings = {
    canvas: {
        id: 'popcorn',
    },
    //mettres le src pour avoir soit les popcorne || les corns
    sprite: "sprite--test.png",
    popcorns: [
        {
            sx: 0,
            sy: 0,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 50,
            sy: 0,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 0,
            sy: 50,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 50,
            sy: 50,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }
        , {
            sx: 0,
            sy: 100,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 50,
            sy: 100,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 0,
            sy: 150,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 50,
            sy: 150,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 0,
            sy: 200,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }, {
            sx: 50,
            sy: 200,
            sw: 50,
            sh: 50,
            dx: 0,
            dy: 0,
            dw: 50,
            dh: 50
        }
    ],
    corns: [
        {
            sx: 100,
            sy: 0,
            sw: 25,
            sh: 25,
            dx: 0,
            dy: 0,
            dw: 25,
            dh: 25
        }, {
            sx: 100,
            sy: 25,
            sw: 25,
            sh: 25,
            dx: 0,
            dy: 0,
            dw: 25,
            dh: 25
        }, {
            sx: 125,
            sy: 0,
            sw: 25,
            sh: 25,
            dx: 0,
            dy: 0,
            dw: 25,
            dh: 25
        }, {
            sx: 125,
            sy: 25,
            sw: 25,
            sh: 25,
            dx: 0,
            dy: 0,
            dw: 25,
            dh: 25
        },
    ],
    projectiles: {
        magnitude: {
            //a quelle distand les sprite peuvent aller vers le haut
            min: 1,
            max: 6
        },
        angle: {
            //pour modifier son angle dans son lancer aleatoirement
            min: -0.5,
            max: 0.5
        },
        //acceleter +vite lors de sa propultion ou - vite
        acceleration: {
            min: 0.01,
            max: 0.05
        },
        //rotation des image + = + rapide et - = - moins rapide
        rotation: 0.1
    },
}
