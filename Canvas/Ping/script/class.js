var Objeto = function(x, y, width, height, radius, color) {
	this.id;
	this.life = 100;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.vx = 0;
	this.vy = 0;
	this.color = color;
	this.colide = false;
	this.gravity = true;
	this.sound = new Audio('./sounds/blop.mp3');
	this.sound.volume = 0.1;

	this.update = (f) => {
		this.draw(f);
	}

	this.draw = (f) => {
		if (f == 1) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.closePath();
		}

		if (f == 2) {
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height)
		}
	}

	this.soundEfect = () => {
		if (this.sound) {this.sound.play();}
		//blop.play();
	}

}