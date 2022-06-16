var Per_class = function() {
	this.id = 0;
	this.name = "unknow";
	this.color = "red";
	this.width =  20;
	this.height = 20;
	this.x = 20;
	this.y = 20;
	this.vx = 5;
	this.vy = 5;
	this.life = 100;
	this.head = "idle";
	this.trail = [];
	this.tail = 25;

	this.draw = () => {
		if (this.trail.length > this.tail) {this.trail.shift()};
		this.trail.push({x:this.x, y:this.y});
	

		for (i in this.trail) {
			ctx.fillStyle = "green";
			ctx.fillRect(this.trail[i].x, this.trail[i].y, this.width, this.height);
		}

		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

};