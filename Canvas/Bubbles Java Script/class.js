Celula = function(x,y,cor) {
	this.id = 'id';
	this.radius = 20;
	this.x = x;
	this.y = y;
	this.color = cor;
	this.vx = 0;
	this.vy = 0;
	this.pot = 0.1;

	this.exec = function() {
		this.update();
		this.mov();	
	}

	this.update = function() {
		this.x += this.vx;
		this.y += this.vy;

		if (this.vx > 0) {this.vx -= 0.1}; 
		if (this.vx > 0) {this.vy -= 0.1};
		if (this.vx < 0) {this.vx += 0.1}; 
		if (this.vx < 0) {this.vy += 0.1};

	}

	this.mov = function() {
		//segue o mouse
		if (this.x + this.radius < canvas.width || this.y + this.radius < canvas.height) {
			if (this.x < mouseX) {this.vx += this.pot;}
			if (this.y < mouseY) {this.vy += this.pot;}
			if (this.x > mouseX) {this.vx -= this.pot;}
			if (this.y > mouseY) {this.vy -= this.pot;}
		}

		//quicar botom
		if(this.y + this.radius > canvas.height){
			this.y = canvas.height - this.radius;
			this.vy *= -0.8;
		}
		//quicar top
		if(this.y - this.radius < 0){
			this.y = this.radius;
			this.vy *= -0.8;
		}
		//quicar right
		if(this.x + this.radius > canvas.width){
			this.x = canvas.width - this.radius;
			this.vx *= -0.8;
		}
		//quicar left
		if(this.x - this.radius < 0){
			this.x = this.radius;
			this.vx *= -0.8;
		}
	
	}

}