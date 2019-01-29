/*
	Just testing out making the game object into a class.
*/

class Player extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, image) {
		super(scene, x, y, image);
		this.setInteractive();

		this.onClick = this.onClick.bind(this);
		this.onRelease = this.onRelease.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onActivate = this.onActivate.bind(this);

		// another test
		this.on('pointerdown', function(pointer) {
			console.log("pointer down")
		});
	}

	onClick(pointer, activeObject) {
		console.log("clicked on the player");
		console.log("active object is:", activeObject);
	}

	onRelease(pointer, activeObject) {
		console.log("released the player");
		console.log("active object is:", activeObject);
	}

	onSelect(pointer, activeObject) {
		console.log("selected the player");
		console.log("active object is:", activeObject);
	}

	onActivate(pointer, activeObject) {
		console.log("activated the player");
		console.log("active object is:", activeObject);

		this.scene.tweens.add({
			targets: this,
			x: {value: this.x + 25, duration: 2000, ease: 'Bounce.easeOut'},
			y: {value: this.y + 25, duration: 2000, ease: 'Bounce.easeOut'},
		})
	}
}

export default Player