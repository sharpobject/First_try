import Particles from "./Particles";
import Player from "./Player";
import preloadAll from "./preload";

function preload() {
  preloadAll(this); // this.load.image('sky', 'assets/sky.png');
  // this.load.image('bomb', 'assets/bomb.png');
}

function create() {
  const particles = new Particles(this);
  this.add.image(400, 300, "sky");
  const player = new Player(this, 500, 500, "player");
  const opponent = new Player(this, 200, 200, "opponent");
  const cardframe = new Player(this, 500, 200, "cardframe");
  this.input.on("pointerdown", particles.pointerBurst, this);
}

function update() {// whatever
}

const config = {
  type: Phaser.AUTO,
  height: 600,
  width: 800,
  scene: {
    preload,
    create,
    update
  }
};
const game = new Phaser.Game(config);