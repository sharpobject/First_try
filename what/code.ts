import InputHandler from './InputHandler';

function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('bomb', 'assets/bomb.png');
}

function create ()
{
	this.add.image(400, 300, 'sky');

	let player = this.add.image(600, 450, 'bomb');
	player.setInteractive();

	player.onClick = function(pointer, game) {
		/*
		game.tweens.add({
			targets: player,
			x: {value: player.x - 50, duration: 2000, ease: 'Bounce.easeOut'},
			y: {value: player.y - 50, duration: 2000, ease: 'Bounce.easeOut'},
		});*/
	};

/*
	let inputDown = function(pointer, gameObject) {
		if (gameObject.onClick) {
			gameObject.onClick(pointer, this);
		} else {
			console.log("no callback")
		};
	};
	
	let inputUp = function(pointer, gameObject) {
		console.log("released")
	};

	this.input.on('gameobjectdown', inputDown, this);
	this.input.on('gameobjectup', inputUp, this);
*/
	this.input.on('gameobjectdown', inputHandler.inputDown, this);
	this.input.on('gameobjectup', inputHandler.inputUp, this);

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
const inputHandler = new InputHandler(game);
