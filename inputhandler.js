class InputHandler {
	constructor(game) {
		this.game = game;
		this.test = 10000000;
		console.log("This.game was defined", this.game);
	}

	inputDown(pointer, gameObject) {
		console.log("This.game doesn't:", this.game);
		if (gameObject.onClick) {
			gameObject.onClick(pointer, this.game);
		};
	}

	inputUp(pointer, gameObject) {
		console.log("released")
	}
}

export default InputHandler