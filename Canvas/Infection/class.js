Celula = function(x,y,cor) {
	this.id = data.length;
	this.radius = 10;
	this.x = x;
	this.y = y;
	this.color = cor;
	this.vx = rand(0.1,2);
	this.vy = rand(0.1,2);
	this.pot = 0.1;
	this.mass = 1;
	this.grav = false;
	this.colide = 0;

	this.exec = function() {
		this.updat();
		this.mov();
	}

	this.updat = function() {
		
		this.x += this.vx;
		this.y += this.vy;
		
		
		if (this.colide >= 150) {
			this.color = "black"
			this.grav = true;
		} else {
			//this.color="blue";
		}
	}

	this.mov = function() {
		/*/segue o mouse
		if (this.x + this.radius < canvas.width || this.y + this.radius < canvas.height) {
			if (this.x < mouseX) {this.vx += this.pot;}
			if (this.y < mouseY) {this.vy += this.pot;}
			if (this.x > mouseX) {this.vx -= this.pot;}
			if (this.y > mouseY) {this.vy -= this.pot;}
		}*/

		//quicar botom
		if(this.y + this.radius >= canvas.height){
			this.y = canvas.height - this.radius;
			this.vy = -this.vy / 1.1; // 1.1 é a força perdida no impacto
		}
		//quicar top
		if(this.y - this.radius < 0){
			this.y = 0 + this.radius;
			this.vy = -this.vy / 1.1;
		}
		//quicar right
		if(this.x + this.radius > canvas.width){
			this.x = canvas.width - this.radius;
			this.vx = -this.vx / 1.1;
		}
		//quicar left
		if(this.x - this.radius < 0){
			this.x = 0 + this.radius;
			this.vx = -this.vx / 1.1;
		}

		/*/quicar quando colidir
		if (this.colide) {
			//this.x = this.radius;
			//this.y = this.radius;
			this.vx = this.vx * -1;
			this.vy = this.vy * -1;
			this.colide = false;
		}*/
	}

}