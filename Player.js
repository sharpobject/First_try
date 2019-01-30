/*
	Just testing out making the game object into a class.
*/

class Player {
	constructor(scene, x, y, image) {
		this.scene = scene;

		this.sprite = new Phaser.Physics.Arcade.Sprite(scene, x, y, image);
		this.sprite.setInteractive();
		scene.sys.displayList.add(this.sprite);
		scene.sys.updateList.add(this.sprite);
		
		this.onClick = this.onClick.bind(this);
		this.onRelease = this.onRelease.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onActivate = this.onActivate.bind(this);

		this.sprite.onClick = this.onClick;
		this.sprite.onRelease = this.onRelease;
		this.sprite.onSelect = this.onSelect;
		this.sprite.onActivate = this.onActivate;
	}

	onClick(pointer, activeObject) {
		console.log("clicked on player,", activeObject);
	};

	onRelease(pointer, activeObject) {
		console.log("released player,", activeObject);
	}

	onSelect(pointer, activeObject) {
		console.log("selected player,", activeObject);
	}

	onActivate(pointer, activeObject) {
		console.log("activated player,", activeObject);
		this.scene.tweens.add({
			targets: this.sprite,
			x: {value: this.sprite.x + 200, duration: 2000, ease: 'Bounce.easeOut'},
			y: {value: this.sprite.y + 200, duration: 2000, ease: 'Bounce.easeOut'},
		});
	}
}

export default Player