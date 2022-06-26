var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var apertou = false;
var gravidade = 1.0;
var exibirpos = true; //exibe posição do foquete na tela
var right = left = up = down = false;

canvas.width = 800;
canvas.height = 600;



var foquete = function(){
	this.w = 50;
	this.h = 60;
	this.x = 350;
	this.y = 0;
	this.veloc = 0;
	this.pot = 2;
	this.potmax = 20;
	this.potrcs = 5;
	this.potrcsmax = 10;
	
	this.exibe = function(){
		ctx.fillStyle = "blue";
		ctx.fillRect(this.x, this.y, this.w, this.h); //desenha personagem
		
		ctx.font = "10px Arial";
    	ctx.strokeStyle = "yellow";
    	ctx.strokeText("W", this.x + 20, this.y + 10);
    	ctx.strokeText("A", this.x + 2, this.y + 30);
    	ctx.strokeText("D", this.x + 40, this.y + 30);
    	ctx.strokeText("S", this.x + 20, this.y + 55);

 
	}
	this.combustaoup = function(){
		ctx.fillStyle = "orange";
		ctx.fillRect(this.x, this.y+this.h, 10, 30); //desenha combustão
		ctx.fillRect(this.x+this.w-10, this.y+this.h, 10, 30); //desenha combustão
	}
	this.combustaoup2 = function(){
		ctx.fillStyle = "red";
		ctx.fillRect(this.x, this.y+this.h, 10, 60); //desenha combustão
		ctx.fillRect(this.x+this.w-10, this.y+this.h, 10, 30); //desenha combustão
		ctx.fillStyle = "orange";
		ctx.fillRect(this.x, this.y+this.h+15, 10, 55); //desenha combustão
		ctx.fillRect(this.x+this.w-10, this.y+this.h+15, 10, 55); //desenha combustão
	}
	this.rcsleft = function(){
		ctx.fillStyle = "grey";
		ctx.fillRect(this.x-15, this.y, 15, 10);
	}
	this.rcsright = function(){
		ctx.fillStyle = "grey";
		ctx.fillRect(this.x+this.w, this.y, 15, 10);
	}
	
}
var obstaculo = function(){
	this.w = 25; 
	this.h = 25;
	this.x = 0;
	this.y = 0;
	this.cor = "red";
	this.ativo = false;
	
	this.cria = function(nx, ny){
		this.x = nx;
		this.y = ny;
		ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.w, this.h);
	}
}

foquete01 = new foquete();
obstaculo01 = new obstaculo();
obstaculo01.ativo == false;
// [[[ MAIN ]]]]
function main(){
	limpatela();
	document.addEventListener("keydown", tecla);
	grav();
	foquete01.exibe();
	toque();
	
	//efeito rcs e propulsor
	if (right == true){foquete01.rcsleft();}
	if (left == true){foquete01.rcsright();}
	if (up == true){
		if (foquete01.veloc > 0 && foquete01.veloc < 5) {foquete01.combustaoup()}
		if (foquete01.veloc > 5) {foquete01.combustaoup2()} 
	}
	if (right == true){foquete01.rcsleft();}
	//obstaculos
	if (obstaculo01.ativo == false){
		randobstaculo()
	}
	obstaculo01.cria(randx, randy)
	obstaculo01.ativo = true;
	
	if (obstaculo01.y < 600){
		randy += gravidade;
		} else {randy = -10;obstaculo01.ativo = false;}
	
	desenha();
	teclaoff();
	window.requestAnimationFrame(main);
	
}

function tecla(key){
	apertou = true;
	k = key.keyCode;
	
	if (k == 65){//A
		left = true;
		foquete01.x-= foquete01.veloc;
		if (foquete01.veloc < foquete01.potrcsmax){foquete01.veloc+=foquete01.potrcs;}
	}
	if (k == 68){//D
		right = true;
		foquete01.x+= foquete01.veloc;
		if (foquete01.veloc < foquete01.potrcsmax){foquete01.veloc+=foquete01.potrcs;}
	}
	if (k == 87){//W
		up = true;
		if (foquete01.veloc < foquete01.potmax){foquete01.veloc+=foquete01.pot;}
		foquete01.y -= foquete01.veloc - gravidade;
	}
	if (k == 83){//S
	down = true;
		if (foquete01.veloc > -foquete01.potmax){foquete01.veloc-=foquete01.pot;}
		foquete01.y -= foquete01.veloc + gravidade;
	}
	
}

function teclaoff(){
	apertou = right = left = up = down = false;
	if (foquete01.veloc > 0){foquete01.veloc--;};
	if (foquete01.veloc < 0){foquete01.veloc++;};
	
}

function grav(){

	if (foquete01.y < 600 - foquete01.h && !up){foquete01.y += gravidade;}
	if (foquete01.y >= 600 - foquete01.h){foquete01.y = 600 - foquete01.h}
	
}

function desenha(){
	if (exibirpos == true){
		ctx.fillStyle = "blue";
		ctx.font = "32pt Tahoma";
		ctx.fillText("X: " + foquete01.x + ", " + "Y: " + foquete01.y , 400, 50); //Desenha a posição do mouse
		ctx.fillText("Aceleração: " + foquete01.veloc , 0, 50);
	}
}

function limpatela(){
	ctx.clearRect(0, 0, 800, 600); //desenha quadro branco em toda a tela
}

function randobstaculo(){
	randx = Math.floor(20 + Math.random() * 770)
	//randy = Math.floor(20 + Math.random() * 570)
	randy = -10;
}

function toque(){
	if (foquete01.x + foquete01.w > obstaculo01.x &&
		foquete01.x < obstaculo01.x + obstaculo01.w &&
		foquete01.y + foquete01.h > obstaculo01.y &&
		foquete01.y <  obstaculo01.y + obstaculo01.h
		){ 
	
	obstaculo01.ativo = false;		
	}
}



function logs(){
	console.clear()
	console.log("Velocidade: " + foquete01.veloc); //velocidade
}

main();
