import InputHandler from './InputHandler';
import Player from './Player';

function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('bomb', 'assets/bomb.png');
}

function create ()
{
	this.add.image(400, 300, 'sky');

	this.input.on('gameobjectdown', inputHandler.inputDown, this);
	this.input.on('gameobjectup', inputHandler.inputUp, this);

	let anotherPlayer = new Player(this, 500, 500, 'bomb');
	let anotherPlayer2 = new Player(this, 400, 400, 'bomb');
	let anotherPlayer3 = new Player(this, 300, 300, 'bomb');

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

const inputHandler = new InputHandler();    
let game = new Phaser.Game(config);
