var bird = document.getElementById('bird');
bird.style.left = '0px';
bird.style.top = '0px';
var speed = 2;
var mX = 0;
var mY = 0;
bLeft = 0;
bTop = 0;
look1 = true;
look2 = false;

//document.addEventListener('click', function(e) {')

document.addEventListener('mousemove', e => {
    mX = e.pageX;
    mY = e.pageY;
}, false);

function loop() {
    update();
    move();
    requestAnimationFrame(loop);
}

function update() {
    bLeft = parseInt(bird.style.left);
    bTop = parseInt(bird.style.top);

    if (look1 && !look2) {
        look2 = true;
        bird.src="img/birdr.gif";
    };

    if (!look1 && look2) {
        look2 = false;
        bird.src="img/birdl.gif";
    };
}

function move() {
    if (bLeft < mX - 40) {bird.style.left = bLeft + speed + 'px';look1 = true;}
    if (bLeft > mX + 10) {bird.style.left = bLeft - speed + 'px';look1 = false;}
    if (bTop < mY - 5) { bird.style.top = bTop + speed + 'px';}
    if (bTop > mY + 5) { bird.style.top = bTop - speed + 'px';}
}

loop();
