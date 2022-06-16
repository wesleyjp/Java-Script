const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
var fps = 15;
var pcase = [];

var pencil = {
    x: 0,
    y: canvas.height -5,
    xi: 0,
    yi: canvas.height -5,
    speed: 4,
    altmax: 150,
    altmin: 50,
    state: true,
    color: 'white',
}

function loop() {
    setTimeout(function(){
        update();
        render(pencil);
    
        window.requestAnimationFrame(loop);
    }, 1000/fps);

}

function update() {
    if (pencil.x > canvas.width) {
        pencil.x = 0;
        pencil.y = canvas.height;
        pencil.xi = 0;
        pencil.yi = canvas.height;

        pencil.color = randCor();
        console.log('Zerou');
        ctx.beginPath()
        ctx.clearRect(0,0,canvas.width,canvas.height); //limpa Tela
    };

    if (pencil.y <= canvas.height - pencil.altmax) {pencil.state = false;}
    if (pencil.y >= canvas.height - pencil.altmin) {pencil.state = true;}

    updown();
}

function updown() {
    if (pencil.state) {
        if (pencil.xi != pencil.x) { //nao deixa o valor de xi, yi ser igual x,y
            pencil.xi = pencil.x;
            pencil.yi = pencil.y;
        }

        pencil.x += pencil.speed;
        pencil.y -= rand(pencil.altmin, pencil.altmax)//pencil.speed;
        console.log('subindo');
    }
    if (!pencil.state) {
        if (pencil.xi != pencil.x) { //nao deixa o valor de xi, yi ser igual x,y
            pencil.xi = pencil.x;
            pencil.yi = pencil.y;
        }

        pencil.x += pencil.speed;
        pencil.y += rand(pencil.altmin, pencil.altmax)//pencil.speed;     
        console.log('descendo');

    }
}

function render(obj) {
    ctx.clearRect(0,0,canvas.width,canvas.height); //limpa Tela
    ctx.strokeStyle = obj.color;
    ctx.moveTo(obj.xi,obj.yi);//ponto inicial
    ctx.lineTo(obj.x,obj.y);//próximo ponto
    ctx.stroke();//desenha

    ctx.font = "30px Arial";
    ctx.strokeStyle = "white";
    ctx.strokeText(`X: ${pencil.x}`, 10, 35);
    ctx.strokeText(`Y: ${pencil.y}`, 130, 35);
    ctx.strokeText(`XI: ${pencil.xi}`, 240, 35);
    ctx.strokeText(`YI: ${pencil.yi}`, 350, 35);
    ctx.strokeText(`STATE: ${pencil.state}`, 10, 65);

}


function randCor() {
var c1 = rand(0, 255); //Red
var c2 = rand(0, 255); // Green
var c3 = rand(0, 255); // Blue
var c4 = Math.random() * 1; //alfa
return "rgb("+c1+","+c2+","+c3+")";
}

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


loop();
