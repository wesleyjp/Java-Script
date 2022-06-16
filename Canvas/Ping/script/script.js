var data = [];
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var grav = 5; //gravity
var points = 0;
var nivel = 1;
var paused = false;
var blop = new Audio('./sounds/blop.mp3');
blop.volume = 0.1;

canvas.width = 1200;
canvas.height = 550;

character = new Objeto(500, 500, 200, 10, 0, "rgb(255,255,255)");
character.gravity = false;
character.vx = 30; //Variavel Temporaria!
character.vy = 30; //Variavel Temporaria!
data.push(character);

window.addEventListener("keydown", function(){
	if (!paused) {
		control(event.keyCode);
	}

	if (event.keyCode === 13) {  
        //saida(elemento("executar").value);
        pause()
    }
})

canvas.addEventListener("mousemove", function(e){
	
	if (e.clientX > 0 &&
		e.clientY > 0 &&
		e.clientX < canvas.width &&
		e.clientY < canvas.height) {
		character.x = e.offsetX - (character.width / 2);
		character.y = e.offsetY - (character.height / 2);
	}
});

// Main Functions

function loop(){
	if (paused) {return}
	render();
	update();
	gravity();
	guard();
	clean();

	window.requestAnimationFrame(loop)
}

function update() {
	mobs();
	colide();
	saida("Pontos: "+points, 10, 20);
	saida("Nivel: "+nivel, 10, 40)

	if (points >= 900) {saida("REINICIANDO...", canvas.width / 2 - 90, canvas.height / 2, "60px ArialBlack", "blue");}
	if (points >= 1000){window.location.reload();} //Reinicia o processo
	if (nivel <= 99 && points >= nivel * 10) {nivel++}
}

function colide() {
	for (var c=1; c< data.length; c++) {
		if (data[c].x + data[c].radius >= character.x &&
			data[c].x - data[c].radius <= character.x + character.width &&
			data[c].y + data[c].radius >= character.y &&
			data[c].y - data[c].radius <= character.y + character.height) {
			data[c].colide = true;
			//points += data[c].radius;
			points++;
			data[c].soundEfect();
		}
	}
}

function mobs() {
	if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 >= 100 - nivel) {
		var c1 = rand(0, 255); //Red
		var c2 = rand(0, 255); // Green
		var c3 = rand(0, 255); // Blue
		var c4 = Math.random() * 1; //alfa
		var c5 = rand(1, 20);; // radius

		var mobX = Math.floor(Math.random() * (canvas.width - 1 + 1)) + 1;
		var mobColor = "rgb("+c1+","+c2+","+c3+")";
		mob = new Objeto(mobX, -10, null, null, c5, mobColor);
		
		data.push(mob);
	}

}

function guard() {
	// Elimina Objetos que estejam fora do canvas
	for (i in data) {
		let limit = 20;
		if (data[i].y + data[i].height < 0 - limit ||
			data[i].y  > canvas.height + limit||
			data[i].x + data[i].width < 0 - limit||
			data[i].x > canvas.width + limit) {data[i].life = 0;}
	}
	// Elimina Objetos que tenham colidido
	for (i in data) {
		if (data[i].colide) {data[i].life = 0}
	}
}

function gravity() {
	for (i in data) {
		if (data[i].gravity) {
			data[i].y += grav;
		}
	}
}

function render(obj) {
	ctx.clearRect(0,0,canvas.width,canvas.height); //limpa Tela

	for (i in data) {
		data[i].update(1);
		data[i].update(2);
	}
}

function clean() {
	for (i in data) {
		if (data[i].life <= 0) {
			data.splice(data.indexOf(data[i]), 1);
		}
	}
}

function control(e) {

	switch(e) {
		case 37:
			if (character.x > 0) {character.x -= character.vx;}
		break;
		case 38:
			if (character.y > 0) {character.y -= character.vy;}
		break
		case 39:
			if (character.x + character.width < canvas.width) {character.x += character.vx;}
		break;
		case 40:
			if (character.y + character.height < canvas.height) {character.y += character.vy;}
		break;
	}
}


//// Basic Functions
function saida(str, x, y) {

	ctx.font = "ArialBlack";
	ctx.fillStyle = "White";

	ctx.fillText(str, x, y);
}


function elemento(id) {
	return document.getElementById(id);
 }

 function pause() {
 	if (paused) {
 		paused = false;
 		loop();
 	} else {
 		paused = true;
 		saida("PAUSED", canvas.width / 2 - 90, canvas.height / 2, "60px ArialBlack", "blue")
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