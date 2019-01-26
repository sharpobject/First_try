let inputHandler = {
	inputDown : function(pointer, gameObject) {
		if (gameObject.onClick) {
			gameObject.onClick(pointer, this.game);
		} else {
		console.log("no callback")
		};
	},

	inputUp : function(pointer, gameObject) {
		console.log("released")
	},
}

export default inputHandler