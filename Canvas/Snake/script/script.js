var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
key_press = null;

var objetos = [];

//Create Snake
var per = new Per_class();
per.id = 1;
per.name = "Snake";
objetos.push(per);


//Events
document.addEventListener("keydown", (e) => {key_press = e.key});
document.addEventListener("keyup", (e) => {key_press = ""});


function loop() {
	render();
	update();
	window.requestAnimationFrame(loop);
}

function render() {
	ctx.clearRect(0,0,canvas.width,canvas.height);

	for (i in objetos) {
		objetos[i].draw();
	}
}


function update() {
	
	//idle
	if (key_press == "") {objetos[findObj("Snake")].head = "idle"};
	//Up
	if (key_press == "ArrowUp") {objetos[findObj("Snake")].head = "up"};
	//Down
	if (key_press == "ArrowDown") {objetos[findObj("Snake")].head = "down"};
	//Right
	if (key_press == "ArrowRight") {objetos[findObj("Snake")].head = "right"};
	//Down
	if (key_press == "ArrowLeft") {objetos[findObj("Snake")].head = "left"};



	//Moving
	switch (objetos[findObj("Snake")].head) {
		case "up":
		objetos[findObj("Snake")].y -= objetos[findObj("Snake")].vy;
		break

		case "down":
		objetos[findObj("Snake")].y += objetos[findObj("Snake")].vy;
		break

		case "right":
		objetos[findObj("Snake")].x += objetos[findObj("Snake")].vx;
		break

		case "left":
		objetos[findObj("Snake")].x -= objetos[findObj("Snake")].vx;
		break

	}



}

//Search for a object in a Objetos array then returns its index.
function findObj(n) {
	for (i in objetos) {
		if (objetos[i].name == n) {return objetos.indexOf(objetos[0])}
	}
}

loop();