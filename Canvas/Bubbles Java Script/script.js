var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

var data = []
var blowStatus = false;

var mouseX = 0;
var mouseY = 0;

for (i = 0; i <= 11; i++) {
	var per = new Celula(rand(0,canvas.width), rand(0,canvas.height), randCor());
	data.push(per);
}

canvas.addEventListener('mousemove', function(e){
	mouseX = e.offsetX;
	mouseY = e.offsetY;
}, false);

function loop() {
	
	render();
	update();
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
	for (i in data) {
		data[i].exec();
	}
}

function rand(min, max) {
 	return Math.floor(Math.random() * (max - min + 1)) + min;
 }

function randCor() {
 	var c1 = rand(0, 255); //Red
	var c2 = rand(0, 255); // Green
	var c3 = rand(0, 255); // Blue
	var c4 = Math.random() * 1; //alfa
	return "rgb("+c1+","+c2+","+c3+")";
}

function colide(x,y,r) {
	for (i in data) {
		if (x - r > data[i].x + data[i].radius) {return true} else {return false}
		if (x + r > data[i].x + data[i].radius) {return true} else {return false}
		if (y - r > data[i].x + data[i].radius) {return true} else {return false}
		if (y + r > data[i].x + data[i].radius) {return true} else {return false}
	}
}