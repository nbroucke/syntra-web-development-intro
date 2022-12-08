// fires after all assets have been loaded
window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  //keyboardactions
  class InputHandler {}

  //shoot lasers
  class Projectile {}

  //damaged enemy looses gears
  class Particle {}

  //the player
  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      //starting position of player
      this.x = 20;
      this.y = 100;
      // no vertical movement
      this.speedY = 0;
    }

    draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  //blueprint for all enemies
  class Enemy {}

  //handles background layer animation
  class Layer {}

  // class that pulls al the layers together
  class Background {}
  // HUD
  class UI {}

  //class to put everything together
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
    }
    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
});
