/*
	Attempts to call these game object methods:

	onClick(pointer, game, activeObject)
		Called when clicking on a valid game object. For animations and stuff.

	onRelease(pointer, game)
		Called when releasing a click. For animations and stuff.
		If an object was already selected for tap method, both the previous
		object and the new object will call this method.

	onSelect(pointer, game)
		Called when releasing a click on a clicked object with no previously
		tapped object (tap mode). For animations and stuff.

	onActivate(pointer, game, activeObject)
		Called to "play" a game object. Use this to affect the game.
		If drag-and-drop method is used, activeObject will be whatever was
		initially dragged from.

	We need two types of tracking, because the foolish users demand both
	drag-and-drop and tap-to-select. 
		
	activeClick is when someone clicks on a clickable object. That lets us know
	that it's currently selected, in case the user wants to drag and drop
	things.

	activeObject is when someone clicks on an object and then releases it, i.e.
	a 'tap'. This will select the object and allow it to interact with another
	'tap' afterwards.

	Hey is there a way to auto-generate these comments? Help
*/

class InputHandler {
	constructor(game) {
		this.game = game;
		this.activeClick = null;
		this.activeObject = null;

		// bleh
		this.inputDown = this.inputDown.bind(this);
		this.inputUp = this.inputUp.bind(this);
	}

	inputDown(pointer, gameObject) {
		if (this.activeClick) { // ban multitouch controls
			console.log("no click recorded");
			return
		};
		if (gameObject.onClick) {
			gameObject.onClick(pointer, this.game, this.activeObject);
			this.activeClick = gameObject;
			console.log("set activeclick", this.activeClick);
		};
	}

	// TODO: Ban multi-touch and only accept inputUp when there's only one touch-press
	inputUp(pointer, gameObject) {
		if (!this.activeClick) { // invalid release
			console.log("no release recorded");
			return
		};
		if (this.activeObject) { // tap control
			if (!this.activeClick === gameObject) { // invalid tap
				this.activeObject = null;
				console.log("invalid tap");
				return
			}; 
			if (this.activeObject.onRelease) {
				this.activeObject.onRelease(pointer, this.game)
			};
			if (gameObject.onRelease) {
				gameObject.onRelease(pointer, this.game)
			};
			if (gameObject.onActivate) {
				gameObject.onActivate(pointer, this.game, this.activeObject)
			};
			this.activeObject = null;
			console.log("active object set to null");
		} else {
			if (this.activeClick === gameObject) { // tap control
				if (gameObject.onSelect) {
					gameObject.onSelect(pointer, this.game)
				};
				this.activeObject = gameObject;
			} else { // drag and drop control
				if (this.activeClick.onRelease) {
					this.activeClick.onRelease(pointer, this.game)
				};
				if (gameObject.onActivate) {
					gameObject.onActivate(pointer, this.game, this.activeClick)
				};
			};
		};
		this.activeClick = null;
		console.log("activeclick set to null");
	}
}

export default InputHandler