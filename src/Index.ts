import Particles from './Particles';
import Player from './Player';
import preloadAll from './preload';

function preload ()
{
	preloadAll(this);
	//this.load.image('sky', 'assets/sky.png');
    //this.load.image('bomb', 'assets/bomb.png');
}

function create ()
{
    let particles = new Particles(this);

	this.add.image(400, 300, 'sky');

	let player = new Player(this, 500, 500, 'player');
	let opponent = new Player(this, 200, 200, 'opponent');
	let cardframe = new Player(this, 500, 200, 'cardframe');

    this.input.on('pointerdown', particles.pointerBurst, this);
}

function update ()
{
}

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);
