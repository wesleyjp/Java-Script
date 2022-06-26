var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

var data = []
var blowStatus = false;

var mouseX = 0;
var mouseY = 0;

for (i = 0; i <= 150; i++) {
	var per = new Celula(rand(0,canvas.width), rand(0,canvas.height), randCor());
	data.push(per);
}

canvas.addEventListener('mousemove', function(e){
	mouseX = e.offsetX;
	mouseY = e.offsetY;
}, false);

function loop() {
	update();
	render();
	window.requestAnimationFrame(loop);
}

function render() { 
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for (i in data) {
		ctx.fillStyle = data[i].color; 
		ctx.beginPath(); 
		ctx.arc(data[i].x, data[i].y, data[i].radius, 0, Math.PI * 2); 
		ctx.fill();
	}
}

function update() {
	colide();
	for (i in data) {
		data[i].exec();
		if (data[i].grav) {data[i].vy += 0.1;} //GRAVIDADE
	}
}

function rand(min, max) {
 	return Math.floor(Math.random() * (max - min + 1)) + min;
 }

function randCor() {
	return "rgb("+ rand(0, 255) +","+ rand(0, 255) +","+ rand(0, 255) +")";
}

function colide() {
	for (i in data) {
		for (o in data) {
			if (i != o ) {
				//data[o].colide = data[i].colide = false;;

				catX = data[i].x - data[o].x;
				catY = data[i].y - data[o].y;
				hypo = catX*catX + catY*catY;
				sRadius = data[i].radius + data[o].radius

				if (hypo <= sRadius*sRadius){
					data[i].colide++;
					data[o].colide++;

					//data[i].vx = -data[i].vx;	
					//data[i].vy = -data[i].vy;
					//data[o].vx = -data[o].vx;	
					//data[o].vy = -data[o].vy;

				}
			}
		}
		
	}
}
