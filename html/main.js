const canvas = document.querySelector('canvas');
const cnv = canvas.getContext('2d');






function loop() {
   // update();
    render())
    window.requestAnimationFrame(loop);
}



function update() {

}


function render() {
    cnv.fillRect(10, 20, 30, 40)
}