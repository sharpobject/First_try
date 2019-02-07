/*
    Just testing out making the game object into a class.
*/

class Player {
    constructor(scene, x, y, image) {
        this.scene = scene;

        this.sprite = new Phaser.Physics.Arcade.Sprite(scene, x, y, image);
        this.sprite.setInteractive();
        scene.input.setDraggable(this.sprite);
        scene.sys.displayList.add(this.sprite);
        scene.sys.updateList.add(this.sprite);

        this.sprite.setScale(0.5, 0.5);

        this.sprite.on("pointerover", this.onPointerOver);
        this.sprite.on("pointerout", this.onPointerOut);
        scene.input.on("dragstart", this.onDragStart);
        scene.input.on("drag", this.onDrag);
        scene.input.on("dragend", this.onDragEnd);

        this.onPointerOver = this.onPointerOver.bind(this);
        this.onPointerOut = this.onPointerOut.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    public onPointerOver() {
        console.log("Pointer over this object", this);
    }

    public onPointerOut() {
        console.log("Pointer out this object", this);
    }

    public onDragStart(pointer) {
        console.log("Started to drag this", this);
    }

    public onDrag(pointer, _, dragX, dragY) {
        this.sprite.x = dragX;
        this.sprite.y = dragY;
    }

    public onDragEnd(pointer) {
        console.log("Finished dragging this", this);
    }

}

export default Player;
