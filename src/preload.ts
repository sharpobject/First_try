/*
    Preload whatever images you need, and some other stuff haha
*/
function preloadImages(scene) {
    scene.load.image("sky", "assets/sky.png");
    scene.load.image("cardframe", "assets/cardframe.png");
    scene.load.image("player", "assets/player.png");
    scene.load.image("opponent", "assets/opponent.png");
    scene.load.image("breakdancer", "assets/people/breakdancer.png");
    scene.load.image("butler", "assets/people/butler.png");
    scene.load.image("dancer", "assets/people/dancer.png");
    scene.load.image("man", "assets/people/man.png");
    scene.load.image("woman", "assets/people/woman.png");
    scene.load.image("zombie", "assets/people/zombie.png");
    scene.load.atlas("flares", "assets/particles/flares.png", "assets/particles/flares.json");
}

function preloadAll(scene) {
    preloadImages(scene);
}

export default preloadAll;
