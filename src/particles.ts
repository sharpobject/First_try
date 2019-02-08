class Particles {
    constructor(scene) {
        this.scene = scene;

        this.burstParticles = scene.add.particles("flares").createEmitter({
            angle: { min: 0, max: 360 },
            blendMode: "SCREEN",
            frame: "blue",
            gravityY: 800,
            lifespan: 600,
            scale: { start: 0.5, end: 0 },
            speed: { min: -800, max: 800 },
            x: 300,
            y: 300,
            // active: false,
        });

        this.angledParticles = scene.add.particles("flares").createEmitter({
            angle: { min: 0, max: 360 },
            blendMode: "ADD",
            frame: "red",
            gravityY: 300,
            lifespan: 2000,
            quantity: 2,
            scale: { start: 0.4, end: 0 },
            speed: { min: 400, max: 600 },
            x: 300,
            y: 300,
            // active: false,
        });
    }

    public pointerBurst(pointer, gameObject) {
        this.burstParticles.setPosition(pointer.x, pointer.y);
    }

    public angledFlare(x, y, color, angle, gameObject) {
        if (gameObject.x && gameObject.y) {
            x = gameObject.x;
            y = gameObject.y;
        }

        this.angledParticles.setPosition(x, y);
    }
}

export default Particles;

/*
    Some handy particle animations
    http://labs.phaser.io/index.html?dir=game%20objects/particle%20emitter/&q=
*/

/*
let angledParticles = this.scene.add.particles('flares').createEmitter({
    frame: 'blue',
    x: x,
    y: y,
    lifespan: 2000,
    speed: { min: 400, max: 600 },
    angle: angle,
    gravityY: 300,
    scale: { start: 0.4, end: 0 },
    quantity: 2,
    blendMode: 'ADD',
    //active: false,
});

// color is 'blue', 'green', 'red', 'white', or 'yellow'
// gameObject is optional
function angledFlare(scene, x, y, color, angle, gameObject) {
    if (gameObject.x && gameObject.y) {
        x = gameObject.x;
        y = gameObject.y;
    };

    angledParticles.setPosition(x, y);
    return angledParticles;
    // angledParticles.destroy();
    // http://www.html5gamedevs.com/topic/36961-how-to-destroy-particle-emitter/
}

let burstParticles = this.scene.add.particles('flares').createEmitter({
    frame: 'blue',
    x: pointer.x,
    y: pointer.y,
    speed: { min: -800, max: 800 },
    angle: { min: 0, max: 360 },
    scale: { start: 0.5, end: 0 },
    blendMode: 'SCREEN',
    lifespan: 600,
    gravityY: 800,
    //active: false,
});

function pointerBurst(scene, pointer) {
    burstParticles.setPosition(pointer.x, pointer.y);
    return burstParticles;
}
*/
