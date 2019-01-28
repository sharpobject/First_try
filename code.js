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

	player.onClick = function(pointer, game, activeObject) {
		console.log("clicked on the fucking player");
	};

	player.onRelease = function(pointer, game) {
		console.log("released the piece of shit player");
	};

	player.onActivate = function(pointer, game, activeObject) {
		console.log("activated this pleasant object", game);
		console.log("tweens", game.tweens);
		game.tweens.add({
			targets: player,
			x: {value: player.x - 50, duration: 2000, ease: 'Bounce.easeOut'},
			y: {value: player.y - 50, duration: 2000, ease: 'Bounce.easeOut'},
		});
	};


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
